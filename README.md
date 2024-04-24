A simple To-Do List web application that allows users to add, delete, and view tasks.

This is a full-stack web application built using the PERN stack (PostgreSQL, Express, React, Node.js)

## Features

- Database Integration: Utilize PostgreSQL as the database to store and manage data.
  - RESTful API: Develop a RESTful API using Express for handling CRUD operations.
  - Frontend UI: Build the frontend user interface using React for a modern and responsive design.
  - State Management: Utilize state management libraries such as react-query for managing application state.
  - Deployment: Deploy the application to a hosting service like Heroku, AWS, or any hosting platform of your choice.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm or yarn
- PostgreSQL database
- Git (for version control)

## Running the App

1. Clone the repository

   ```bash
   git clone https://github.com/happychuks/task-to-do.git
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   cd task-to-do
   cd backend && npm install #or yarn install
   cd ../frontend && npm install # or yarn install
   ```

3. Set up your PostgreSQL database:

   - Create a new PostgreSQL database for the application.
   - Configure the database connection:
     - Create a .env file in root directory and add the following env variables using your PostgreSQL configuration
       ```env
           PG_HOST = localhost
           PG_PORT = 5432
           PG_DATABASE = <your-database-name>
           PG_USER = <your-username>
           PG_PASSWORD = <your-password>
       ```
     - After connecting to the database run this script from your database server application to add uuid extension to the database:
       `create extension if not exists "uuid-ossp";`

4. Run the application in development mode:

   - Start Backend server:

   ```bash
   cd backend && npm dev #or yarn dev
   ```

   - Start the Frontend server:

   ```bash
   cd frontend && npm start #or yarn start
   ```

5. Access the Application in your web browser at `http://localhost:3000`.

Technologies:

- Front-end: React / Chakra UI
- Back-end: Node.js/Express routes
- Database: PostgreSQL / Beekeeper Studio
- ORM: objection, knex
- Deployment: Heroku
