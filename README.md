Final Project for The Iron Yard

- This application is an online bookclub where users can join or create bookclubs. Each book club will have three libraries: current book the members are reading, past books they've read, and books that they want to read in the future.

- Users will be able to log in and out, after registering. Users can create clubs, join other clubs, and also edit a club's book list. They can also They will also have the ability to communicate with other members in the club about general things or about the specific book they're currently reading. Users will also be able to see past comments related to specific books and/or clubs they're a member of.

- API:
  - I will be using the GoodReads API for this application.
  - I'll also use Backendless to save users' libraries as well as friend lists

- Data Modeling:
  - collections:
    - users
    - books
  - models:
    - user
    - book
    - session

- Routes:
  - login and register
  - home page - list of clubs
  - club page: current book, previous books and future books
  - book/club page: book info and comments for that book and/or club
