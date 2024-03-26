<?php

namespace App\Http\Controllers\Student;

use App\Contracts\Repositories\StudentRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Student\StudentAddRequest;
use App\Services\StudentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class StudentController extends Controller
{
    public function __construct(
        private readonly StudentRepositoryInterface $studentRepo,
    )
    {}

    public function registerStudent(StudentAddRequest $request, StudentService $service) : RedirectResponse
    {
        $data = $service->getRegisterStudentData($request);
        $this->studentRepo->add($data);
    }
}
