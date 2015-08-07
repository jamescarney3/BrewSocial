# BrewSocial
[www.brewsocial.co][live]
[live]: http://www.brewsocial.co

## About
BrewSocial is a recipe sharing application for homebrewers based loosely on AllRecipes. Any user can browse or search for recipes and registered users, and registered users can publish their own recipes to the database.

my capstone project for the App Academy May-August 2015 cohort in New York. This application is based loosely on AllRecipes with a focus on homebrewing, one of my other hobbies. I built BrewSocial mainly with Ruby on Rails and Backbone.js. It also uses the OmniAuth Twitter gem to handle user sign ups and sign ins with Twitter, the Paperclip gem to handle file uploads, the AWS-SDK for file storage, as well as the PgSearch and Kaminari gems to streamline database queries and pagination of the results. This project lives on my GitHub at [link to github], and I can be reached personally at jmcarneyiii@gmail.com.

## Features
- Multiple search methods for limiting to results to recipes only, users only, both recipes and users, and recipes by attributes and/or ingredients
- Users can sign up and sign in with Twitter
- Responsive recipe creation/edit form creates, destroys, and shows recipe-ingredient association models in real time
- Users can choose a privacy setting on own recipes to limit their visibility to other users
- Redirects users to sign in page for certain features if not signed in

## Implementation
### General
- Responsive design/UI with CSS and jQuery
- Client-side Backbone.js in concert with REST-based Rails API
- Stores recipe and user pictures with AWS
- File uploads with Paperclip gem
- PostgreSQL database search queries handled by pg_search gem
- Search result pagination with Kaminari gem
### Libraries
- JavaScript: Backbone.js, Underscore, jQuery, jquery.serialize.JSON
- Ruby gems: paperclip, aws-sdk, figaro, backbone-on-rails, jbuilder, bcrypt, pg_search, kaminari

## Next Steps
- [ ] Add additional descriptive user attributes (e.g. location, bio)
- [ ] Allow users to comment on recipes
- [ ] Allow users to rate recipes
- [ ] Display aggregate ratings on recipes' show pages
- [ ] Display aggregate ratings of a user's recipes on that user's profile page
- [ ] Allow user-to-user follow associations
- [ ] Handle ingredients additions on recipe form with autocompleting text input instead of dropdown
- [ ] Add unrecognized ingredients to the database, but only use them to autocomplete the addition input if they appear in some threshold number of recipes
