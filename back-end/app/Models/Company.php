<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'description',
        'logo_url',
    ];

    public function properties()
    {
        return $this->hasMany(Property::class);
    }
}
