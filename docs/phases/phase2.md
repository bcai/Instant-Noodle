# Phase 2: Flux Architecture and Post CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PostsIndex
  - PostIndexItem
* PostForm

### Stores
* Post

### Actions
* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost 
* PostActions.createPost
* PostActions.editPost 
* PostActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
