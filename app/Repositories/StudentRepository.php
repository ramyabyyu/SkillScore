<?php

namespace App\Repositories;
use App\Contracts\Repositories\StudentRepositoryInterface;
use App\Enums\RoleEnum;
use App\Models\Role;
use App\Models\StudentDetail;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class StudentRepository implements StudentRepositoryInterface
{
    public function __construct(
        private readonly User           $student,
        private readonly StudentDetail  $studentDetail,
        private readonly Role           $role
    )
    {

    }

    public function add(array $data): object|string
    {
        $studentRole = $this->role->where('name', RoleEnum::STUDENT)->first();
        $data['role_id'] = $studentRole->id;
        return $this->student->create($data);
    }

    public function getFirstWhere(array $params, array $relations = []): Model|null
    {
        return $this->student->where($params)->with($relations)->first();
    }

    public function getList(array $orderBy = [], array $relations = [], int|string $dataLimit = DEFAULT_DATA_LIMIT, int $offset = null): Collection|LengthAwarePaginator
    {
        return $dataLimit == 'all' ? $this->student->latest()->get() : $this->student->paginate($dataLimit);
    }

    public function getListWhere(array $orderBy = [], string $searchValue = null, array $filters = [], array $relations = [], int|string $dataLimit = DEFAULT_DATA_LIMIT, int $offset = null): Collection|LengthAwarePaginator
    {
        $query = $this->student->with('role')->whereHas('role', function ($query) {
            $query->where(['name' => RoleEnum::STUDENT]);
        })
            ->with($relations)
            ->when($searchValue, function($query) use ($searchValue) {
                return $query->where('name', 'like', "%$searchValue%");
            })
            ->when(!empty($orderBy), function ($query) use ($orderBy) {
                $query->orderBy(array_key_first($orderBy), array_values($orderBy)[0]);
            });

        $filters += ['searchValue' => $searchValue];

        return $dataLimit == 'all' ? $query->get() : $query->paginate($dataLimit)->appends($filters);
    }

    public function update(string $id, array $data): bool
    {
        $studentRole = $this->role->where('name', RoleEnum::STUDENT)->first();
        return $this->student->where('id', $id)->where('role_id', $studentRole->id)->update($data);
    }

    public function delete(array $params): bool
    {
        return $this->student->where($params)->delete();
    }
}
