# README Generator

![License](https://img.shields.io/badge/License-MIT-brightgreen)

## Description

This is a simple Node.js application that generates a img.svg file based on user input. It utilizes the inquirer.js library to prompt the user with a series of questions about their desired logo and then constructs an SVG image file with the provided information.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Features

- Collects logo details for 
    - Text 
    - Text Color in keyword or hex
    - Shape
        - Square
        - Circle
        - Triangle
    - Shape Color in keyword or hex
    - File name
- Dynamically generates a SVG file with the chosen parameters and saves it with the entered filename.
- It exports the SVG file to the examples folder for later use.

## Installation & Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the command `npm install` to install the required dependencies.
4. Execute the application by running `node index.js`.
5. Answer the prompted questions to provide information about your logo.
6. The generated img.svg file will be saved in the examples directory.

A brief walkthrough video can be found [Here](https://drive.google.com/file/d/1AYA3Zjw5jfOm9xYYJdoqJP7tfUpqR9PG/view?usp=sharing)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## Author

Jeffrey Scott

If you have any questions or need further assistance, feel free to [contact me on GitHub](https://github.com/vader9911).

## Acknowledgments

- [Jest](https://www.npmjs.com/package/jest) - Complete and ready to set-up JavaScript testing solution.
- [color-name.js](https://www.npmjs.com/package/color-name) - A JSON with keyword color names and values.
- [inquirer.js](https://www.npmjs.com/package/inquirer) - Used for interactive command-line user interfaces.
- [shields.io](https://shields.io/) - Provides badges for your projects.
