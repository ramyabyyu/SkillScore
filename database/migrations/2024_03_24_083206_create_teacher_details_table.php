<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teacher_details', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['1', '0', '2'])->default('1')->comment('1 = active; 0 = inactive; 2 = leave');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->text('address');
            $table->string('nuptk', 16)->unique()->comment('Nomor Unik Pendidik dan Tenaga Kependidikan');
            $table->date('dob');
            $table->string('pob');
            $table->string('nik', 16)->unique();
            $table->date('joined_at');
            $table->string('last_education');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher_details');
    }
};
