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

