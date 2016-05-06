# Instant Noodle

[Instant Noodle live][heroku]

[heroku]: http://www.insta-noodle.com

Instant Noodle is a full-stack web application inspired by Instagram.  It utilizes a Ruby on Rails backend with PostgreSQL database, and frontend React.js with a Flux architectural design pattern. 

## Features & Implementation

### Dynamic Page Rendering

Instant Noodle is an application that operates mainly on delivering content through a single static page source. Authentication is served through static Rails backend HTML. However, all other components are served through frontend React.js components. The root page listens to a `PostStore` to render posts on the homepage. A 'UserStore' is also used to render User Profile views to the user.

### Authentication

User accounts and sessions are managed on the Rails backend. Account creation uses BCrypt to safely encrypt and store user passwords as digests in the database for future authentication.  With a session cookie, a user session can be created and destroyed by simply comparing unique session hashes that are stored on both client and server ends. 

### Post Index

On the Rails backend, Posts are stored in a post table that contains a post `description`, `author_id` and an `image_url`. A post also consists of comments and likes. Before the homepage is rendered, an API call is made to the database which joins the post table with the like and comment tables to fetch data with the post. On success, JSON data of the posts are sent back to be stored in the `PostStore` to be stored for component rendering.

On the frontend, posts are rendered in a `PostIndex` component with each post represented by a nested `PostIndexItem` component. 

![post-index]

### Post Creation and Editing

Post creation and editing makes use of React-modals to display a form for the user to fill out. With a simple click of the create or edit button, an overlayed form is displayed. Image creation makes use of Cloudinary CDN to store images and provides a link that is stored in the database for retrieval and display on the frontend. A simple description is also provided for the user in the form input.

Creation form modal:

```javascript
<Modal className="modal" onRequestClose={this.closeModal} isOpen={this.state.showForm}>
  <PostForm callback={this.closeModal}/>
  <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
</Modal>
```

![post-form]


### Comments

A comments join table contains a `body`, `user_id`, and `post_id` columns, which stores the comment text, the user who made the comment and the post that the comment is associated with.

The React component structure for notebooks mirrored that of notes: the `CommentsIndex` component renders a list of `CommentIndexItem`s as subcomponents. 

`Comment` render method:

```javascript
render: function() {
  var comment = this.props.comment;
  if (comment.user.id === currentUserId){
    var deleteButton = (<button className="deletable" onClick={this.removeComment}>X</button>);
  } else {
    var deleteButton = "";
  }

  return (
    <li className="comment">
      <p>
        <span id="comment-author">
          <Link to={"/users/" + comment.user.id}>{comment.user.username}</Link>
        </span>
        {comment.body}
        {deleteButton}
      </p>
    </li>
  );
}
```

### Likes

As with comments, likes are also stored in the database under a like join table which contains `user_id` of the user who liked the post and the `post_id`.

On the frontend, a nested `LikeCounter` component displays the number of likes a post contains. A `LikeButton` renders a heart that serves as a button for users to 'like' or 'unlike' posts.

`LikeCounter` render method:

```javascript
render: function() {
  var likeText = " likes";
  if (this.props.likeCount === 1){
    likeText = likeText.slice(0,5);
  }

  var likes = this.props.likeCount
  if (this.props.likeCount < 1){
    likes = "Be the first to like this.";
  } else {
    likes = likes + likeText;
  }

  return (
    <div className="like-counter-wrapper">
      <span>{likes}</span>
    </div>
  );
}
```

### User Profile

A `UserDetail` component uses the `UserStore` to fetch and display `username`, `full_name` from the user table in the database as well as the number of posts the user has authored. Below the `UserDetail` component a `PostIndex` component is nested to display only posts the user has authored.

![user-detail]


### User Search

User search is implemented in the UserStore using JavaScript's #filter method to filter through an array of all users based on whether the user's username is contained in the the search string that is being input by a user performing the search.

`UserStore.search` function: 

```javascript
UserStore.search = function(searchString) {
  if(searchString.length < 1){
    return [];
  }
  var usersArray = UserStore.allUsers();

  return usersArray.filter(function(user){
    var userName = user.username;
    return ((userName.toLowerCase()).indexOf(searchString.toLowerCase()) > -1);
  }).splice(0,5);
};
```
On the frontend, the `UserSearch` component is displayed as a searchbar in the navigation bar of the webpage. Typing into the form will cause a dropdown of results to display.

![user-search]


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Instant Noodle are outlined below.

### Follow

Following other users can provided a much more filtered homepage that displays posts relevant to the users that the current user would prefer to see. A highly useful feature for a social media site such as Instant Noodle.

### Tags

To be able to filter posts by tags would be very useful to find posts relevant to a certain topic but which applies to all user posts as well on the site. Tags can be applied in comments with hashtags and display relevant post results when entered into the search bar.


[post-index]: ./docs/post_index.png
[post-form]: ./docs/post_form.png
[user-search]: ./docs/user_search.png
[user-detail]: ./docs/user_detail.png