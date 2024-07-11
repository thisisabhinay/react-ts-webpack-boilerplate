# React TypeScript Webpack Boilerplate

This is a boilerplate project for setting up a React application with TypeScript, Webpack, and Jest for testing. 

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/thisisabhinay/react-ts-webpack-boilerplate.git
   cd react-ts-webpack-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- **`npm test`**: Runs the tests in watch mode.
- **`npm run coverage`**: Runs the tests and generates a coverage report.
- **`npm start`**: Starts the development server.
- **`npm run build`**: Builds the project for production.

### Project Structure

- **`src/`**: Contains the source code of the application.
- **`public/`**: Contains the static files.
- **`config/`**: Contains configuration files for Webpack, Jest, etc.
- **`package.json`**: Lists the project dependencies and scripts.

### Webpack Configuration

Webpack is configured to handle:

- JavaScript and TypeScript files (`.js`, `.jsx`, `.ts`, `.tsx`).
- CSS and SCSS files.
- Static assets like images.

### ESLint Configuration

ESLint is configured to lint the code and ensure coding standards. The configuration can be found in the `.eslintrc` file.

### Jest Configuration

Jest is configured for testing the React components. The configuration can be found in the `jest.config.js` file.

### Tailwind CSS Configuration

Tailwind CSS is included and configured. The configuration can be found in the `tailwind.config.js` file.

### Development Tools

- **Babel**: Transpiles ES6+ code to ES5.
- **TypeScript**: Adds static type definitions.
- **PostCSS**: Processes CSS with plugins like Autoprefixer.
- **Webpack**: Bundles the JavaScript files.

### License

This project is licensed under the [MIT](LICENSE) License.
