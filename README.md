# Backend Tutorial: Node, Express, MongoDB

A beginner-friendly REST API that follows the tutorial architecture: **models → controllers → routes**. It includes user registration/login with password hashing and JWTs, plus protected CRUD operations for posts.

## What is included

- Node.js + Express project setup
- MongoDB Atlas connection through Mongoose
- `User` and `Post` database models
- Authentication APIs: register, login, and current-user profile
- Full CRUD APIs for posts
- A ready-to-import Postman collection
- Environment variables kept out of Git

## Step-by-step setup

1. Install [Node.js LTS](https://nodejs.org/), then run `npm install` in this folder.
2. Create a free MongoDB Atlas cluster. In Atlas, create a database user, allow your current IP address under **Network Access**, then copy the Node.js connection string.
3. Copy `.env.example` to a new file named `.env`. Replace the placeholder `MONGODB_URI` and set a long random `JWT_SECRET`.
4. Start the server with `npm run dev` (or `npm start`).
5. Open `http://localhost:5000/api/v1/health`. You should receive `{ "message": "API is healthy." }`.

## API routes

| Method | Endpoint | Purpose | Login required |
| --- | --- | --- | --- |
| GET | `/api/v1/health` | Health check | No |
| POST | `/api/v1/auth/register` | Create an account | No |
| POST | `/api/v1/auth/login` | Sign in and receive a JWT | No |
| GET | `/api/v1/auth/me` | Read current user | Yes |
| POST | `/api/v1/posts` | Create a post | Yes |
| GET | `/api/v1/posts` | Read all posts | No |
| GET | `/api/v1/posts/:id` | Read one post | No |
| PATCH | `/api/v1/posts/:id` | Update your post | Yes |
| DELETE | `/api/v1/posts/:id` | Delete your post | Yes |

## Testing in Postman

1. Import `postman/Backend-Tutorial-CRUD.postman_collection.json`.
2. Send **Register** or **Login**, then copy `token` from the response into the collection variable named `token`.
3. Send **Create Post**, and copy the returned post `_id` into `postId`.
4. Use **Get Posts**, **Update Post**, and **Delete Post** to demonstrate the complete CRUD cycle.

## Suggested evaluation demo

Show the `.env` file (without revealing the secret), `npm run dev`, the successful health endpoint, then run Postman requests in this order: Register → Login → Create → Get → Update → Delete. Point out how route files delegate to controller functions, and how controller functions use Mongoose models.

## Publish to GitHub

After reviewing the files, commit and push from this folder:

```powershell
git add .
git commit -m "Build Node Express MongoDB CRUD API"
git push -u origin main
```

Never commit `.env`; `.gitignore` already protects it.
