<?php

namespace App\Providers;

use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('manage_teacher', function (User $user) {
            return $user->role()->where('name', RoleEnum::PRINCIPAL)->exists();
        });
        Gate::define('manage_student', function (User $user) {
            return $user->role()->where('name', RoleEnum::PRINCIPAL)->exists();
        });
    }
}
