# License Plate Calculator

This tool generates sequential license plates based on a numeric input. Plates are composed of a fixed number of characters. Initially, only numbers are used; once the numeric capacity is exceeded, alphabetic characters are introduced from right to left. The sequence continues until all positions are filled with the letter 'Z'.

# Features

- Customizable plate length configured via the plateTotalFigures property, which could potentially be exposed to the UI to make it user configurable.
- Sequential generation logic.
- Supports alphanumeric transitions (e.g., 999999 → 00000A, 99999Z → 0000AA).
- Error handling for input overflow.

# Usage

Input a number: Enter a positive integer representing the sequential index of the desired license plate.

Output: The corresponding license plate is generated based on the position in the alphanumeric sequence.

# CLI version

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
