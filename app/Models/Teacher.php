<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'user_id',
        'address',
        'nuptk',
        'dob',
        'pob',
        'nik',
        'joined_at',
        'last_education'
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
