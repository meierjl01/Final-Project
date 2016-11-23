Final Project for The Iron Yard

-This application is an online bookshelf where users can interact with other users, giving book recommendations and suggestions, and also keep track of books they'd like to read.

-The application I'm going to build for my final project will be an online bookshelf of sorts. Originally, I wanted to build an app that would allow users to keep track of books they want to read, give other users suggestions of books to read, and books they have read. My idea was to have a suggestion feature (like Netflix) based on that user's reading history. However, that was too much for a three week project. So I'm focusing on allowing a user to have an online bookshelf and give recommendations to other users. Ideally, I'd like them to be able to connect to their actual GoodReads account with my app, but I'm still working out the details of that.

-API:
  -I will be using the GoodReads API for this application, unless I run into an issue using the proxy server or XML to JSON conversion Jess and I are working to set up. If that's the case, I will change my plan to involve Google Books instead.
  -I'll also use Backendless to save users' libraries as well as friend lists

-Data Modeling:
  -collections:
    -users
    -books
  -models:
    -user
    -book

-Routes:
  -home:
    -maybe includes a list of recent bestsellers?
  -nav(not logged in):
    -registration
    -login
  -nav(logged in):
    -bookshelf
    -'friends'
    -search books
    -search users

-Special Features:
  -I'm not sure if I'll use this or not, but I think that allowing users who have GoodReads accounts to access their accounts on my app would be a great user experience.
