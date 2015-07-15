# BrewSocial

[Heroku link][heroku]

<<<<<<< HEAD
[heroku]: #
=======
[heroku]: https://brewsocial.herokuapp.com/
>>>>>>> eb35ff629f43c1fc7226650914a9567f288f3440

## Minimum Viable Product
BrewSocial is a clone of AllRecipes built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

<<<<<<< HEAD
- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create profiles
- [ ] Create public recipes
- [ ] Create private recipes
- [ ] View user profiles
- [ ] View owned recipes
- [ ] View other users' public recipes
=======
- [x] Create accounts
- [x] Create sessions (log in)
- [ ] Create profiles
- [x] Create public recipes
- [x] Create private recipes
- [ ] View user profiles
- [?] View owned recipes
- [?] View other users' public recipes
>>>>>>> eb35ff629f43c1fc7226650914a9567f288f3440
- [ ] Comment on recipes
- [ ] Follow other users
- [ ] Search for recipes by ingredients
- [ ] Search for other users by username

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User authentication, recipe creation (~1 day)
I'll implement user authentication based on the model we studied during the
dedicated rails unit. By the end of phase 1 users will be able to sign up, sign
in, and log out, and create recipes. Before moving to phase 2 I will deploy the
application to Heroku.


### Phase 2: Viewing recipes and user profiles (~2 days)
I'll add views for a dashboard, a homepage, users' profiles, and recipes. Logged in users
will be able to follow other users from their profile pages, and add recipes to
their dashboards from recipes' views.



### Phase 3: Recipe comments and lists (~1-2 days)
I'll allow logged in users to leave comments on a recipe from its display page,
and to comment on existing comments. Once the rails relationships are set up
I'll handle the display of new comments in real time with backbone.


### Phase 4: Searching for recipes (~2 days)
I plan to implement a search function for users to find public recipes in the
database by ingredients. I'll initially use a simple rails view, but I would
like to handle ultimately handle the search via ajax using backbone.


### Phase 5: Notifications (~2 days)
For phase 5 I'll include a backbone subview in the dashboard to display
notifications to users when another user follows them, comments on one of their
authored recipes, and when a user they follow comments on, creates, or adds a
recipe.


### Bonus Features (TBD)
- [ ] Separate lists for recipes to-brew, in progress, and completed
- [ ] Side-scrolling recipe lists on user profiles
- [ ] User avatars
- [ ] Detailed user stats on profile pages
- [ ] Detailed recipe stats on recipe show pages
- [ ] Activity feed
- [ ] Recipe photos
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
