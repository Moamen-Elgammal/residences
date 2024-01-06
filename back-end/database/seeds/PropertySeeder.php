<?php

use Illuminate\Database\Seeder;
use App\Models\Property;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Property::create([
            'title' => 'Modern Apartment',
            'description' => 'A beautiful modern apartment in the city.',
            'type' => 'apartment',
            'price' => 200000,
            'location' => '123 Main St',
            'bedrooms' => 2,
            'bathrooms' => 1,
            'area' => 1000,
            'status' => 'for_sale',
            'company_id' => 1,
            "image_urls"  => [
                "https://images.unsplash.com/photo-1560807707-8cc77767d783",
                "https://images.unsplash.com/photo-1549920215-7390ad8b8f1b",
                "https://images.unsplash.com/photo-1571338781076-4edc0e1783a9"
            ],
        ]);

        Property::create([
            'title' => 'Cozy Villa',
            'description' => 'A cozy villa with a scenic view.',
            'type' => 'villa',
            'price' => 500000,
            'location' => '456 Oak Street',
            'bedrooms' => 3,
            'bathrooms' => 2,
            'area' => 2000,
            'status' => 'for_rent',
            'company_id' => 1,
            'image_urls'  => [
                'https://images.unsplash.com/photo-1598550871760-24d7bbb7a3fa',
                'https://images.unsplash.com/photo-1574459816644-72018942d8fe',
                'https://images.unsplash.com/photo-1582968499828-e17a19b7f1bb',
            ],
        ]);
    }
}
