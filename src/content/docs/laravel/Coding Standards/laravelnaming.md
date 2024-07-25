---
title: Maintain Laravel naming conventions
---

Follow the PSR Standards as stated <a target="_blank" class="cursor-pointer" href="https://www.php-fig.org/psr/psr-2/">here</a>, and also use the naming conventions accepted by the Laravel community which will help in organizing your files. Using consistent naming conventions is important because inconsistencies can cause confusion which will eventually lead to error. A tabular guideline is provided below.



| What      |        How    |    Good  |          Bad  |
| :--------------------- | :-------------------- | :--------------: |  :--------------: | 
| Model          | singular             | User |  Users | 
| hasOne or belongsTo relationship| singular | articleComment | articleComments, article_comment |  
| All other relationships      | plural              | articleComments |  articleComment, article_comments |  
| Table  | plural     | article_comments |  article_comment, articleComments |  
| Route     | splural  | articles/1 | articles/1 | article/1 | 
| Pivot table |  singular model names in alphabetical order | article_user | user_article, articles_users | 
| Table column | snake_case without model name | meta_title | MetaTitle; article_meta_title |
| Model property | snake_case | $model->created_a | $model->createdAt |
| Controller | singular | ArticleController | ArticlesController |
| Contract (interface) | adjective or noun | AuthenticationInterface | Authenticatable, IAuthentication |
| Trait | adjective | Notifiable | NotificationTrait |
| Foreign key | singular model name with _id suffix | article_id | ArticleId, id_article, articles_id |
| Method | camelCase | getAll | get_all



<style>

    .sl-markdown-content :not(a, strong, em, del, span, input, code) + :not(a, strong, em, del, span, input, code, :where(.not-content *)){
        font-size:15px !important;
        background-color:#F4F4F5 !important
    }
    .sl-markdown-content :is(th, td):not(:where(.not-content *)) {
        padding:1rem 1rem !important;
        padding-left:1rem !important;
        padding-right:1rem !important
    }

   
    </style>











