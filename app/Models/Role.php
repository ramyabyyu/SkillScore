<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function user() : HasOne
    {
        return $this->hasOne(User::class);
    }

    public function permissions() : BelongsToMany
    {
        return $this->belongsToMany(Permission::class);
    }
}
