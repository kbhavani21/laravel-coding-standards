---
title: Breaking MVC and Putting Logic in Blade 
---
This one has been a sacred rule for me personally for many years:

Model is for Database
Controller is for parsing route parameters, performing the action (with extra classes if needed - Services/Jobs/etc), and passing the results to the View Blade View is ONLY for showing the data, with minimal logic like @if or @foreach

And I've seen developers breaking these rules by putting @php inside Blade or doing calculations in the View layer. I was angry at them.

BUT...

It became debatable when they released Livewire Volt. Officially supported by the Laravel team, having ALL the logic in the Blade file became a "normal" practice for convenience.

**Blade file:**

        <?php
        
        use function Livewire\Volt\{state};
        
        state(['count' => 0]);
        
        $increment = fn () => $this->count++;
        
        ?>
        
        <div>
            <h1>{{ $count }}</h1>
            <button wire:click="increment">+</button>
        </div>

So, this "bad practice" became much more open for debates and personal preference. But, I still stand for my opinion that in most cases, Views should be only for the presentation layer, except maybe for small projects.

So yeah, these are (not so) bad practices I've seen developers doing in their Laravel projects.

In addition, I will quickly add two more kinda-obvious things without deeper comments:

- Not writing tests (do I really need to explain?)
- Not upgrading to new versions (no need to do it right away, but eventually it's recommended)





