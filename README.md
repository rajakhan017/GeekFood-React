# GeeksFood-Completed
## Project Overview
This repository contains a React application designed to showcase various features related to food, quotes, and restaurants. The project is structured with different components for each section, providing a modular and organized codebase.
## Table of Contents
1. [Components](#components)
2. [Routing](#routing)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
## Components <a name="components"></a>
- **About**: Information about the project and contact details.
- **Error**: Component to handle and display errors.
- **Food**: Displays a list of food items.
- **FoodItem**: Details of a specific food item.
- **Layout**: Main layout component that wraps other components.
- **Main**: Main landing page component.
- **Quotes**: Section dedicated to showcasing quotes.
- **Restaurants**: Displays information about restaurants.
## Routing <a name="routing"></a>
The application utilizes the `react-router-dom` library for client-side routing. The routes are defined in the `App` component, specifying paths and corresponding components for different sections of the app.
- **Main**: Home page at path `/`.
- **Quotes**: Quotes section at path `/quote`.
- **Restaurants**: Restaurants section at path `/restaurant`.
- **Food**: Food section at path `/food`.
- **FoodItem**: Detailed view of a food item at path `/food/:id`.
- **About**: Contact information at path `/contact`.
## Installation <a name="installation"></a>
To set up the project locally, follow these steps:
1. Clone the repository: `git clone
https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
## Usage <a name="usage"></a>
Run the application locally with the following command:
```bash
npm start
```
This will start the development server, and you can access the app at `http://localhost:3000` in your browser.
## Contributing <a name="contributing"></a>
Feel free to contribute by submitting issues or pull requests. Follow the [Contributing Guidelines](CONTRIBUTING.md) for more details.
