# Secured-Password
A secure and user-friendly password management application built with React.js for the frontend and PHP for the backend. This project provides a centralized platform to store, organize, and generate strong passwords for various online accounts.

# Backend API Directory Structure

The `api/` directory contains individual PHP scripts that serve as API endpoints for the front-end (e.g., a React.js application) to interact with. Each file is responsible for handling a specific API request (function or method in a basic language), processing the necessary business logic, and returning a JSON response to the client. These scripts make HTTP methods like `GET`, `POST`, `PUT`, or `DELETE` to handle various types of interactions between the client and the server.

The API folder's primary responsibility is to handle the input/output flow, such as receiving requests, passing data to the logic layer (lib), and returning JSON responses to the front-end.

## Structure

```plaintext
backend/
├── public/
│   └── api/ 
│       └── register.php
│       └── login.php
│       └── passwords.php
|── lib/
|   └── auth.php
|   └── password.php
```
### Files in the `api/` directory
`login.php`: this script brings data ftom the front office and Calls functions in the lib/auth.php file to authenticate users and return a JSON response.

`Register.php`: Handles user registration by accepting user details, validating the input, creating a new user in the database, and returning a response.

`passwords.php`: Manages CRUDs operations for passwords by calling functions from lib/password.php. Used by The front-end (React.js or any other client-side application), which makes HTTP requests to these API endpoints.
 
### Files in the `config/` directory
`database.php`: Contains the logic for connecting to a MySQL or other databases.