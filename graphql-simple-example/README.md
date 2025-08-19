This project is a simple example demonstrating how to use GraphQL with Apollo Server and Apollo Client.

## Overview

- **Server:**  
  The GraphQL server is built using Node.js, Apollo Server, and the `graphql` package. It provides a simple API for managing user data, including querying all users, querying a user by ID, and creating a new user.

- **Client:**  
  The client is a React application that uses Apollo Client to interact with the GraphQL server. It allows you to view the list of users, see details for a specific user, and add new users.

---

## How to Run

### 1. Start the Server

1. Open a terminal and navigate to the `server` directory:
   ```
   cd server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node server.js
   ```
   The server will run at `http://localhost:4000/`.

---

### 2. Start the Client

1. Open a new terminal and navigate to the `client` directory:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React app:
   ```
   npm run dev
   ```
   The app will be available at the address shown in the terminal (e.g., `http://localhost:5173/`).

---

## Features

- View all users
- View details of a specific user by ID
- Add a new user

---

## Notes

- The server runs on `localhost:4000` by default.
- The client uses Apollo Client to communicate with the GraphQL server.
- This example is intended for learning and demonstration purposes, so the code and structure are kept simple.
