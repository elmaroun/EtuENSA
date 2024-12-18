<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'N_Apogee' => $this->faker->numberBetween(10000000, 99999999),
            'CNE' => $this->faker->regexify('[A-Z]{1}[0-9]{9}'),
            'filiere' => $this->faker->randomElement(['Génie Informatique', 'Génie Civil', 'Génie Mécatronique', 'Supply Chain Management', 'Big Data & AI', 'Cyber Security', 'GSTR']),
            'annee_inscription' => $this->faker->numberBetween(2010, date('Y')),
            'niveau' => $this->faker->randomElement(['1ère année', '2ème année', '3ème année']),
        ];
    }
}
