<?php

namespace App\Http\Controllers\Teacher;

use App\Contracts\Repositories\TeacherRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Teacher\TeacherAddRequest;
use App\Services\TeacherService;
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

    public function getListView() : Response
    {
        return Inertia::render('Teacher/List');
    }

    public function store(TeacherAddRequest $request, TeacherService $service) : RedirectResponse
    {
        $data = $service->getAddData($request);
        $this->teacherRepo->add($data);
        return redirect()->back(201);
    }
}
