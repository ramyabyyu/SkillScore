<?php

namespace App\Repositories;
use App\Contracts\Repositories\TeacherRepositoryInterface;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class TeacherRepository implements TeacherRepositoryInterface
{
    public function __construct(
        private readonly User           $user,
        private readonly Role           $role,
    )
    {}

    public function add(array $data): object|string
    {
        $teacherRole = $this->role->where('name', ROLE_TEACHER)->get('id');
        $data['role_id'] = $teacherRole->id;
        return $this->user->create($data);
    }

    public function getFirstWhere(array $params, array $relations = []): Model|null
    {
        return $this->user->where($params)->with($relations)->first();
    }

    public function getList(array $orderBy = [], array $relations = [], int|string $dataLimit = DEFAULT_DATA_LIMIT, int $offset = null): Collection|LengthAwarePaginator
    {
        return $dataLimit == 'all' ? $this->user->latest()->get() : $this->user->paginate($dataLimit);
    }

    public function getListWhere(array $orderBy = [], string $searchValue = null, array $filters = [], array $relations = [], int|string $dataLimit = DEFAULT_DATA_LIMIT, int $offset = null): Collection|LengthAwarePaginator
    {
        $query = $this->user->with($relations)
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
        $teacherRole = $this->role->where('name', ROLE_TEACHER)->get('id');
        return $this->user->where('id', $id)->where('role_id', $teacherRole->id)->update($data);
    }

    public function delete(array $params): bool
    {
        return $this->user->where($params)->delete();
    }
}
