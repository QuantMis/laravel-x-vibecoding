<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Test User',
            'email' => 'testuser@example.com',
            'password' => Hash::make(env('TEST_USER_PASSWORD', 'password')),
            'remember_token' => Str::random(10),
        ]);

        DB::table('user_role')->insert([
            'user_id' => 1, // Assuming the first user
            'role_id' => 1, // Assuming the 'user' role
        ]);
    }
}
