---
title:  Use Eloquent RelationshipsNull
---

## Bad:

    $user = User::find($userId);
    $posts = Post::where('user_id', $user->id)->get();

## Good:

    $user = User::find($userId);
    $posts = $user->posts;

## Reasons:

1. <span class="font-semibold">Simplifies Queries:</span> Using Eloquent relationships simplifies and shortens your code.
2. <span class="font-semibold">Improves Readability:</span> It's more readable and clearly shows the relationship between models.