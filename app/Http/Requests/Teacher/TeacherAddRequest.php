<?php

namespace App\Http\Requests\Teacher;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class TeacherAddRequest extends FormRequest
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
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'password' => ['required', 'confirmed', Password::defaults()]
        ];
    }
}
