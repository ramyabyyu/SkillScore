<?php

namespace App\Http\Controllers\Teacher;

use App\Contracts\Repositories\TeacherRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Teacher\TeacherAddRequest;
use App\Services\TeacherService;
use App\Utils\WebConfig;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeacherController extends Controller
{
    public function __construct(
        private readonly TeacherRepositoryInterface $teacherRepo,
    )
    {}

    public function getListView(Request $request) : Response
    {
        $teachers = $this->teacherRepo->getListWhere(orderBy:['id' => 'desc'], searchValue:$request['name'], dataLimit:WebConfig::getSettingValue('pagination_limit'), filters:['name' => $request['name']]);
        return Inertia::render('Teacher/List', [
            'teachers' => $teachers,
            'searchName' => $request->has('name') ? $request['name'] : ''
        ]);
    }

    public function getAddView() : Response
    {
        return Inertia::render('Teacher/Add');
    }

    public function store(TeacherAddRequest $request, TeacherService $service) : RedirectResponse
    {
        $data = $service->getAddData($request);
        $this->teacherRepo->add($data);
        return redirect()->route('teacher.list');
    }
}
