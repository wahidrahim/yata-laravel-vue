<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['task', 'completed', 'archived'];

    protected $casts = [
        'completed' => 'boolean',
        'archived' => 'boolean'
    ];
}
