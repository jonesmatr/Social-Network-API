# Social Network API

## Description

This API provides the backend functionalities for a social networking platform. Users can create, read, update, and delete their profiles, as well as add and remove friends. In addition, users can post thoughts and reactions to these thoughts.

A video demonstration can be accessed [Here](https://youtu.be/NRdvWWYzSEs)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Make sure you have MongoDB installed on your machine.
2. Clone the repository.
3. Navigate to the directory.
4. Run `npm install` to install dependencies.
5. Make sure you have set up the necessary environment variables or edit the default configuration in the `config` folder.
6. Run `npm start` to start the server.

### User

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thought

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:id`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.



