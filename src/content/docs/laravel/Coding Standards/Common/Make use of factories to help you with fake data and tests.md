---
title: Make use of factories to help you with fake data and tests
---
Factories make testing way more manageable.

You can create one using the php artisan make:factory PostFactory command and add random fake data to every column like so:

    namespace Database\Factories;

    use App\Models\User;
    use Illuminate\Database\Eloquent\Factories\Factory;

    class PostFactory extends Factory
    {
        public function definition() : array
        {
            return [
                'user_id' => User::factory(),
                'title' => fake()->sentence(),
                'slug' => fake()->slug(),
                'content' => fake()->paragraphs(5, true),
                'description' => fake()->paragraph(),
            ];
        }
    }

Factories create all the resources you need when writing tests.

Here’s one in action:

    public function test_it_shows_a_given_post()
    {
        $post = Post::factory()->create();

        $this
            ->get(route('posts.show', $post))
            ->assertOk();
    }
    
