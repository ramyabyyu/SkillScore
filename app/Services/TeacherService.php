<?php

namespace App\Services;
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
        $teacherRole = $this->role->where('name', ROLE_TEACHER)->get('id');
        return [
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'role_id' => $teacherRole->id,
        ];
    }
}
