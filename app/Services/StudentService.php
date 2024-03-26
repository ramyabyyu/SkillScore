<?php

namespace App\Services;
use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class StudentService
{
    public function __construct(
        private readonly Role          $role,
    )
    {}

    public function getRegisterStudentData(object $request) : array
    {
        return [
            'full_name' => $request['full_name'],
            'address' => $request['address'],
            'nisn' => $request['nisn'],
            'dob' => $request['dob'],
            'pob' => $request['pob'],
            'previous_school' => $request['previous_school'],
            'status' => '3',
        ];
    }

    public function getUpdateData(object $request) : array
    {
        return [
            'name' => $request['name'],
            'email' => $request['email'],
            'updated_by' => $request->user()->id
        ];
    }
}
