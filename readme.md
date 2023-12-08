# Expense Management System

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The primary functionality of this application is to perform CRUD (Create, Read, Update, Delete) operations on expenses. Users can add, delete, or update expense entries.

## Features

- User authentication: Users can sign up, log in, and log out.
- Expense management: Users can add, delete, and update expense entries.
- Dashboard: Users can view their expenses in a visually appealing dashboard.
- Filtering and sorting: Users can filter and sort their expenses based on various criteria.
- Responsive design: The application is optimized for different screen sizes.

## Technologies Used

- MongoDB: A NoSQL database used to store expense data.
- Express.js: A web application framework used for building the server-side of the application.
- React: A JavaScript library used for building the user interface.
- Node.js: A JavaScript runtime used for server-side JavaScript execution.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/sakshamjain03/Expense-tracker-management`
2. Install the dependencies: `npm i node-modules express colors morgan dotenv concurrently` in main folder.
3. Go to Client Directory using `cd client` command in terminal and Install the dependencies: `npm i axios react-router-dom redux react-redux` 
4. Set up the MongoDB connection: Update the MongoDB connection string in the `.env` file.
5. Start the development server: `nodemon server.js` on PORT:8080 and `node server.js` on PORT:3000.
6. Use `npm run dev` to run server and client application together on PORT:3000 make sure to install concurrently. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
