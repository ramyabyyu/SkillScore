<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'user_id',
        'address',
        'nisn',
        'dob',
        'pob',
        'previous_school',
        'joined_at',
        'grade_id'
    ];

    public function grade() : BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
