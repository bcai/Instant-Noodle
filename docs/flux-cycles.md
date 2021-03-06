# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the callback.
  0. fetches all associated comments.
  0. fetches all associated likes.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receivePost` is set as the callback.

* `fetchPost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receivePost` is set as the callback.
  0. fetches associated comments.
  0. fetches associated likes.

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `POST /api/posts` is called.
  0. `receivePost` is set as the callback.
  0. fetches associated comments.
  0. fetches associated likes.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `PostStore` updates `_posts` and emits change.

* `receivePost`
  0. invoked from an API callback.
  0. `PostStore` updates `_posts[id]` and emits change.

### Store Listeners

* `PostsIndex` component listens to `PostStore`.
* `PostDetail` component listens to `PostStore`.


## Comment Cycles

### Comments API Request Actions

* `createComment`
  0. invoked from `onEnter`
  0. `POST /api/comments` is called.
  0. `receiveComment` is set as the callback.

* `deleteComment`
  0. invoked from 'onClick'
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions
* `receiveComment`
  0. invoked from an API callback.
  0. `PostStore` sets `_posts[id].comments[:id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `PostStore` removes `_posts[id].comments[:id]` and emits change.


## Likes Cycles

###  API Request Actions

* `createLike`
  0. invoked from `onEnter`
  0. `POST /api/likes` is called.
  0. `receiveLike` is set as the callback.

* `deleteLike`
  0. invoked from 'onClick'
  0. `DELETE /api/likes/:id` is called.
  0. `removeLike` is set as the callback.

### Comments API Response Actions
* `receiveLike`
  0. invoked from an API callback.
  0. `PostStore` sets `_posts[id].likes[:id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `PostStore` removes `_posts[id].likes[:id]` and emits change.