# Instant Noodle

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Instant Noodle is a web application inspired by Instagram that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] Minimally necessary features for an Instagram-inspired site: photo sharing, posts organized into collections, and social interaction through viewing, commenting, and liking posts.
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README

## Product Goals and Priorities

Instant Noodle will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, edit, and delete posts (MVP)
- [ ] Organize posts into collections (MVP)
- [ ] View, comment, and like other users' posts (MVP)
- [ ] Edit Profile (expected feature, not MVP)
- [ ] Optional Recipe Form (bonus feature, not MVP)
- [ ] Upload videos (bonus feature, not MVP)
- [ ] Geolocation (bonus feature, not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Posts Model, API, and basic APIUtil (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostForm`
- [ ] save Posts to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Followers (0.5 days)
- [ ] setup `follows` join table 
- [ ] create relationship between user and other users

### Phase 6: Likes (0.5 days)

**Objective:** Posts can be liked by other followers.

- [ ] create `Likes` model and join table
- build out API, Flux loop, and components for:

- [ ] Style new elements

### Phase 7: Comments (1 day)

**Objective:** Comments belong to Posts, and can be viewed in PostsIndex.

- [ ] create `Comments` model
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] commenting requires a logged-in "follower"
  - [ ] Comment Form is available in all posts.
- Use CSS to style new views

### Phase 8: Create User Detail (1.5 days)

**objective:** Enable stats for user as well as user posts to be displayed

- [ ] Display counts for follows, followers, and posts
- [ ] Create a form for editing user profile.
- [ ] Filter posts to only display user's own posts.

### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Optional Recipe Form
- [ ] Upload videos
- [ ] Geolocation
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
