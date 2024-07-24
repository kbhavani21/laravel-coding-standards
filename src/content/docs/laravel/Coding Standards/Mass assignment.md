---
title:  Mass assignment
---
## Bad:


    $article = new Article;
    $article->title = $request->title;
    $article->content = $request->content;
    $article->verified = $request->verified;

    // Add category to article
    $article->category_id = $category->id;
    $article->save();



## Good:


     $category->article()->create($request->validated());






