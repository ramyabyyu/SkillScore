<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;

class InterfaceServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->bindInterfaceWithRepository();
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }

    private function bindInterfaceWithRepository():void
    {
        $repositoriesPath = app_path('Repositories');
        $contractsPath = app_path('Contracts/Repositories');
        $repositoryFiles = File::files($repositoriesPath);
        foreach ($repositoryFiles as $file) {
            $filename = pathinfo($file, PATHINFO_FILENAME);
            $interfaceName = $filename . 'Interface';
            $interfacePath = $contractsPath . DIRECTORY_SEPARATOR . $interfaceName . '.php';
            if (File::exists($interfacePath)) {
                $interface = 'App\Contracts\Repositories\\' . $interfaceName;
                $repository = 'App\Repositories\\' . $filename;
                $this->app->bind($interface, $repository);
            }
        }
    }
}
