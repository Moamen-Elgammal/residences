<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title',
        'description',
        'type',
        'price',
        'location',
        'bedrooms',
        'bathrooms',
        'area',
        'status',
        'image_urls',
        'company_id',
    ];

    protected $casts = [
        'image_urls' => 'array',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
