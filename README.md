# Todo Server

Welcome to the Todo Server, a simple and efficient application built with Express, TypeScript, and MongoDB to manage your tasks seamlessly. This server provides a robust backend for your todo application, allowing you to focus on creating a delightful user experience.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/luke-dowling/todo-server-ts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project and configure the following variables:

   ```env
   PORT=8000
   DB=mongo-uri
   DB_PASSWORD=mongo-uri-password
   ```

   Adjust the values as needed.

### Running the Server

Start the server using the following command:

```bash
npm start
```

The server will be running at `http://localhost:8000` by default.

## API Endpoints

### Get Routes

- **Endpoint:** `/`
- **Method:** GET
- **Description:** Get a list of all routes.

### Get All Todos

- **Endpoint:** `/todos`
- **Method:** GET
- **Description:** Get a list of all todos.

### Get Todo by ID

- **Endpoint:** `/todos/:id`
- **Method:** GET
- **Description:** Get a specific todo by its ID.

### Create Todo

- **Endpoint:** `/todos`
- **Method:** POST
- **Description:** Create a new todo.
- **Request Body:**
  ```json
  {
    "text": "Sample Todo"
  }
  ```

### Update Todo

- **Endpoint:** `/todos/:id`
- **Method:** PUT
- **Description:** Update a todo by its ID.
- **Request Body:**
  ```json
  {
    "text": "Updated Todo",
    "completed": true
  }
  ```

### Delete Todo

- **Endpoint:** `/todos/:id`
- **Method:** DELETE
- **Description:** Delete a todo by its ID.

## Contribution

We welcome and encourage contributions from the community. To contribute to the development of this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Description of changes"`.
4. Push your changes to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to reach out if you have any questions or need assistance. Happy coding </>
