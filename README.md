# Express Courses Application

A modern Express.js application for managing courses, built with ES Modules and EJS templating.

## Features

- ✨ Full CRUD operations for courses
- 🎨 Bootstrap-styled responsive UI
- 🔄 RESTful API architecture
- 📦 ES Modules (ESM) support
- 🎯 EJS templating engine
- 🔍 Client-side form validation
- 🗑️ Async/await with native Fetch API

## Tech Stack

- **Backend**: Express.js (v4.21.1)
- **View Engine**: EJS (v3.1.10)
- **HTTP Client**: Native Fetch API (async/await)
- **Utilities**: Lodash (v4.17.21)
- **Debugging**: Debug (v4.3.7)
- **CSS Framework**: Bootstrap 4

## Project Structure

```
├── app_api/                 # API layer
│   ├── controllers/         # API business logic
│   │   └── courses.js
│   ├── models/             # Data models
│   │   └── courses.js
│   └── routes/             # API routes
│       └── index.js
├── app_server/             # Server-side rendering layer
│   ├── controllers/        # Server controllers
│   │   └── courses.js
│   ├── routes/            # Server routes
│   │   └── index.js
│   └── views/             # EJS templates
│       ├── layout.ejs
│       ├── courses-list.ejs
│       ├── course-info.ejs
│       ├── course-form.ejs
│       └── style.css
├── public/                 # Static files
│   ├── javascripts/       # Client-side scripts
│   │   ├── bootstrap.min.js
│   │   ├── delete.js
│   │   └── validation.js
│   ├── stylesheets/       # CSS files
│   │   ├── bootstrap.min.css
│   │   ├── all.min.css
│   │   └── style.css
│   └── webfonts/          # Font files
├── index.js               # Application entry point
└── package.json           # Project dependencies

```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd list-courses-arrayModel-ESM
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```

4. **Access the application**

   Open your browser and navigate to:

   ```
   http://localhost:3000/courses
   ```

## API Endpoints

### Courses

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | `/api/courses`     | Get all courses       |
| GET    | `/api/courses/:id` | Get a specific course |
| POST   | `/api/courses`     | Create a new course   |
| PUT    | `/api/courses/:id` | Update a course       |
| DELETE | `/api/courses/:id` | Delete a course       |

### Sorting Feature

You can sort courses by one or more fields using the `sortBy` and `sortOrder` query parameters in the API and web routes.

**Example:**

```
http://localhost:3000/courses?sortBy=ects,name&sortOrder=asc
```

This will sort courses first by ECTS (ascending), then by name (ascending).

**Fields:**

- `sortBy`: Comma-separated list of fields (e.g., `name`, `ects`, `id`)
- `sortOrder`: `asc` or `desc` (applies to all fields)

**Test it:**

- Open your browser and visit: `http://localhost:3000/courses?sortBy=ects,name&sortOrder=asc`

The API and frontend will display sorted results accordingly.

## Web Routes

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| GET    | `/courses`            | View all courses             |
| GET    | `/courses/new`        | Display course creation form |
| POST   | `/courses/new`        | Submit new course            |
| GET    | `/courses/:id`        | View course details          |
| GET    | `/courses/delete/:id` | Delete a course              |

## Usage Examples

### View All Courses

Navigate to `/courses` to see a list of all available courses.

### Add a New Course

1. Click the "NEW" button on the courses list page
2. Fill in the course name and info
3. Click "Add Course" to submit

### View Course Details

Click on any course name in the list to view its details.

### Delete a Course

On the course details page, click the "Delete" button to remove the course.

## Development

### Debug Mode

The application uses the `debug` module for logging. To enable debug output:

**Observe query parameters in course listing:**

```bash
DEBUG=app_server:readAll node index.js
```

This will show debug logs for all `/courses` requests, including the query parameters used for sorting.

**Windows (CMD)**

```cmd
set DEBUG=app_server,app_api
npm start
```

**Windows (PowerShell)**

```powershell
$env:DEBUG="app_server,app_api"
npm start
```

**Linux/Mac/Git Bash**

```bash
DEBUG=app_server,app_api npm start
```

#### Debug Namespaces

The application uses specific debug namespaces for different operations:

**App Server (app_server):**

- `app_server:readAll` - Debug logs for reading all courses
- `app_server:readOne` - Debug logs for reading a single course
- `app_server:addOne` - Debug logs for adding a new course
- `app_server:deleteOne` - Debug logs for deleting a course
- `app_server:form` - Debug logs for form rendering

**App API (app_api):**

- `app_api` - Debug logs for API operations

**Examples:**

Enable all debug output:

```bash
DEBUG=* npm start
```

Enable only app_server debug output:

```bash
DEBUG=app_server:* npm start
```

Enable specific operations only:

```bash
DEBUG=app_server:readAll,app_server:addOne npm start
```

Enable both app_server and app_api:

```bash
DEBUG=app_server:*,app_api npm start
```

### Code Style

This project uses ES Modules syntax:

- `import` instead of `require()`
- `export` instead of `module.exports`
- `.js` extensions in import statements

## Configuration

- **Port**: 3000 (configured in `index.js`)
- **View Engine**: EJS
- **Static Files**: Served from `/public` directory

## Dependencies

- `express`: Web application framework
- `ejs`: Embedded JavaScript templating
- `lodash`: Utility library for data manipulation
- `debug`: Small debugging utility

## License

ISC

## Author

## copirate : superD

**Note**: This application uses an in-memory array for data storage. Data will be lost when the server restarts. For production use, consider integrating a database like MongoDB, PostgreSQL, or MySQL.
