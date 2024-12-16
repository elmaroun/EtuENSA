<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Student;
use App\Models\Demande;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Attestation_ScolariteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    
    public function definition(): array
    {
        $demande= Demande::inRandomOrder()
        ->where('demandes.type_demande', "attestation de scolarite")
        ->first();  // Get a random existing student

        return [
            'demande_id' => $demande->id, // Generates a random demande
            'annee1' => fake()->year(),
            'annee2' => fake()->year(),

        ];
    }
}
