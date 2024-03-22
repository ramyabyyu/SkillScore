<?php

namespace App\Services;
use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class TeacherService
{
    public function __construct(
        private readonly Role          $role,
    )
    {}
    public function getAddData(object $request) : array
    {
        $teacherRole = $this->role->where('name', RoleEnum::TEACHER)->first();
        return [
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'role_id' => $teacherRole->id,
        ];
    }
}
