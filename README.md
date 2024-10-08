# Backend Practical Test

This is a Node.js backend application that implements JWT authentication and provides some basic endpoints.

## Endpoints
- **GET /greetings:** Public endpoint that returns a greeting message.
- **POST /auth:** Public endpoint for login (hardcoded credentials: username: admin, password: password). Returns a JWT token valid for 60 seconds.
- **GET /users/:id:** Protected endpoint. Requires a valid JWT. Returns user data for users with id 25 and 26.
- **GET /users:** Protected endpoint. Requires a valid JWT. Returns data for both users.

## Running the project

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## Deployment Instructions

You can deploy this project to Heroku or Vercel.

### Deploying to Heroku
1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Run `heroku create` to create a new app.
3. Run `git push heroku main` to deploy.

### Deploying to Vercel
1. Install the [Vercel CLI](https://vercel.com/download).
2. Run `vercel` to deploy the app.

