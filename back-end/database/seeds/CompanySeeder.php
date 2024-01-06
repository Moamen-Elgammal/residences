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
    }
}
