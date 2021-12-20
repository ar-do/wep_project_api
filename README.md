## API Calls

Method            | Url                   | Body          | Action
-------------     | -------------         | ------------- | -------------
GET               | api/articles          |               | Gets all articles
GET               | api/articles/:id      |               | Gets articles based on id
GET               | api/articles/user?user=[]    |               | Gets articles based on username
GET               | api/articles/search?search=[]     |               | Gets articles based on searchstring
GET               | api/comments     |               | Gets all comments
GET               | api/comments/id/:id      |               | Gets comments based on id
GET               | api/comments/article?id=[]     |               | Gets comments based on article id
GET               | api/users    |               | Gets all user 
GET               | api/users/:id      |               | Gets user based on id
PUT               | api/articles/:id      |   article_headerimg, article_title, article_introtxt, article_content | Does update an article
PUT               | api/comments/:id      |   content  | Does update comments based on id
PUT               | api/users/:id         |     | Does update users based on id
POST        | api/articles       |   headerimg, title, introtxt, content, user  | Does create an article
POST        | api/comments      |   headerimg, title, introtxt, content, user  | Does create an article
DELETE | api/comments/:id | | Does delete an comment based on id
DELETE | api/articles/:id | | does delete an article based on id


               
