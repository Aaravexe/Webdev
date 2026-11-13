# Intro to Backend Development

This repository follows the freeCodeCamp **Intro to Backend Development** tutorial: Node.js, Express, MongoDB/Mongoose, models, controllers, routes, user registration/login/logout, and CRUD APIs for posts.

## Setup

1. Install Node.js LTS and run `npm install`.
2. Create a free MongoDB Atlas cluster, a database user, and a Network Access rule for your current IP.
3. Copy `.env.example` to `.env` and replace `MONGODB_URI` with your Atlas Node.js connection string.
4. Start the server with `npm run dev`.

The server runs at `http://localhost:4000` by default.

## Routes

| Method | URL | Purpose |
| --- | --- | --- |
| POST | `/api/v1/users/register` | Register a user |
| POST | `/api/v1/users/login` | Log in a user |
| POST | `/api/v1/users/logout` | Log out a user |
| POST | `/api/v1/posts/create` | Create a post |
| GET | `/api/v1/posts/getPosts` | Read all posts |
| PATCH | `/api/v1/posts/update/:id` | Update a post |
| DELETE | `/api/v1/posts/delete/:id` | Delete a post |

## Postman test order

1. Import `postman/Backend-Tutorial-CRUD.postman_collection.json`.
2. Register and log in with the sample body.
3. Create a post, then copy its `_id` from the response into the Postman `postId` collection variable.
4. Get, update, and delete that post.

Do not commit `.env`; it is ignored by Git.
