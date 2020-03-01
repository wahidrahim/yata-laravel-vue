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

        for ($i = 0; $i < 5; $i++) {
            Todo::create([
                'task' => 'seeded task ' . ($i + 1)
            ]);
        }
    }
}
