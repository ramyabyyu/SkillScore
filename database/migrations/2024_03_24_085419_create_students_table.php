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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['1', '0', '2', '3'])->default('3')->comment('1 = active;0 = drop out;2 = graduated;3 = pending');
            $table->unsignedBigInteger('user_id')->comment('User account');
            $table->string('full_name');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->text('address');
            $table->string('nisn', 10)->unique()->comment('Nomor Induk Siswa Nasional');
            $table->date('dob');
            $table->string('pob');
            $table->string('previous_school')->nullable();
            $table->date('joined_at');
            $table->unsignedBigInteger('grade_id')->nullable();
            $table->foreign('grade_id')->references('id')->on('grades');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_details');
    }
};
