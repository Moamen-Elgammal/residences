<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leads extends Model
{
    protected $fillable = [
        'name',
        'mobile_number',
        'email',
        'status',
        'created_at',
    ];
}
