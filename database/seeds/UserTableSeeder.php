<?php

use Illuminate\Database\Seeder;
use App\User;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'Anugrah Sandi',
            'email' => 'admin@daengweb.id',
            'email_verified_at' => carbon::now(),
            'password' => bcrypt('secret'),
            'role' => 0
        ]);
    }
}
