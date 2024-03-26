<?php

namespace App\Http\Requests\Student;

use App\Models\Student;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class StudentAddRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => ['required'],
            'address' => ['required'],
            'nisn' => ['required', 'max:10', 'numeric', Rule::unique(Student::class)],
            'dob' => ['required'],
            'pob' => ['required'],
            'previous_school' => ['required'],
        ];
    }
}
