<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name' => "user",
            'email' => 'user@gmail.com',
            'phone' => '1220',
            'zip_code' => '1216',
            'state_city' => 'Dahaka',
            'address' => 'mirpur',
            'password' => Hash::make('12345678'),
        ]);
    }
}
