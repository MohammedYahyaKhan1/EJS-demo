# EJS-demo
This project is a dynamic web application built using Node.js, Express, and EJS templating engine, which simulates a simple Instagram-like profile viewer. It demonstrates how backend data can be rendered dynamically on the frontend using server-side templating.
⚙️ How the Project Works

The application uses Express.js to create a server and handle routing. When a user visits a URL like:

/ig/:username

the server extracts the username from the URL and fetches corresponding data from a local JSON file.

📂 Data Handling (JSON)

The data.json file stores structured user data such as:

Username
Followers & following count
Posts (images, likes, comments)

Example:

This JSON acts like a mock database, allowing the app to display different profiles dynamically.

🖥️ Backend Logic (Express)

In your main server file:

Express is initialized
EJS is set as the view engine
A dynamic route /ig/:username is created
Flow:
User requests /ig/cats or /ig/dogs
Server reads data.json
Finds matching username
Passes data to EJS template
Renders profile page

If the username is not found → an error page is shown.

🎨 Frontend Rendering (EJS)

EJS templates are used to:

Display user details (followers, following)
Loop through posts using EJS syntax
Dynamically insert images, likes, and comments

This allows HTML pages to be generated dynamically on the server side.

📦 Dependencies

From your package.json:

Express → for server and routing
EJS → for templating
