---
title: Must Use Route Names
---
## Don't do this:

    < a href="/posts/{{ $post->id }}">{{ $post->title }}< /a>


## Do this instead:

     < a href="{{ route('posts.show', $post) }}">{{ $post->title }}< /a>



## There are two reasons for this:

> 1. If you ever need to change the URLs (which happens more often than you think), you would need to change them only in the Routes file, and not everywhere in the project


> 2. Often route names follow the standard pattern of CRUD-like Resource Controllers, which makes it easier to read/understand by other future developers


