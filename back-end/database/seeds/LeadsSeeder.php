<?php

use Illuminate\Database\Seeder;
use App\Models\Leads;

class LeadsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Leads::create([
            'name' => 'John Doe',
            'mobile_number' => '1234567890',
            'email' => 'john.doe@example.com',
            'status' => 'new',
            'created_at' => now(),
        ]);
    }
}
