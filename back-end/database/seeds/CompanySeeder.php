<?php

use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([
            'name' => 'ABC Realty',
            'description' => 'A leading real estate company.',
            'logo_url' => 'abc_logo.jpg',
        ]);

        Company::create([
            'name' => 'XYZ Tech Solutions',
            'description' => 'Innovative technology solutions provider.',
            'logo_url' => 'xyz_logo.jpg',
        ]);
    }
}
