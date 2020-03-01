<?php

use App\Todo;
use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Todo::create([
                'task' => $faker->sentence,
                'completed' => false,
                'archived' => false
            ]);
        }
    }
}
