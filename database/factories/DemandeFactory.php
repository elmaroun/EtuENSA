<?php

namespace Database\Factories;
use App\Models\Student;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DemandeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $student = Student::inRandomOrder()->first();  // Get a random existing student
        $user = User::inRandomOrder()->first();
        return [
           'student_id' => $student->id, // Creates a related student
            'type_demande' => fake()->randomElement(['convention de stage ', 'attestation de scolarite', 'attestation de reussite', 'releve des notes']),
            'status' => fake()->randomElement(['Traitée', 'En cours', 'Non traitée']),
            'date_demande' => fake()->date(),
            'admin_id' => $user->id,
        ];
    }
}
