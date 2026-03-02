Smart Task Manager – Backend API

This is the backend of my Software Engineering Assessment Project – Smart Task Manager.
The backend is responsible for handling user authentication, authorization, and task management through secure RESTful APIs.

It is built using Node.js, Express.js, and MongoDB, following a clean and modular architecture to ensure scalability and maintainability.

🌐 Live Deployment

The backend is deployed on Render:

https://smart-task-management-n05m.onrender.com

You can check if the server is running by visiting the link above.
It will return:

{ "mssg": "Task Manager API is running" }
🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt

CORS

dotenv

🔐 Features

User Registration with encrypted password storage

User Login with JWT authentication

Secure password hashing using bcrypt

Protected routes using token-based authorization

Create new tasks

Update existing tasks

Delete tasks

User-specific task management

📌 Project Overview

The backend serves as the core of the Smart Task Manager application. It manages all business logic, database operations, and security mechanisms. Authentication is implemented using JWT, ensuring that only authorized users can access protected routes. Passwords are securely hashed before being stored in the database.

The API follows REST principles and communicates with the frontend application deployed separately.
