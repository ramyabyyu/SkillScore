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
        $teachers = $this->teacherRepo->getListWhere(orderBy:['id' => 'desc'], searchValue:$request['search'], dataLimit:WebConfig::getSettingValue('pagination_limit'));
        return Inertia::render('Teacher/List', [
            'teachers' => $teachers
        ]);
    }

    public function store(TeacherAddRequest $request, TeacherService $service) : RedirectResponse
    {
        $data = $service->getAddData($request);
        $this->teacherRepo->add($data);
        return redirect()->back(201);
    }
}
