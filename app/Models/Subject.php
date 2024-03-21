<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'grade_id', 'teacher_id'];

    public function grade() : BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }

    public function teacher() : BelongsTo
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
