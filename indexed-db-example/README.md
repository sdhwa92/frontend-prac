# IndexedDB Example

This project demonstrates how to use the browser's IndexedDB to create a simple car database, store data, and perform queries.

## Main Features

- Creates an IndexedDB database (`CarsDatabase`)
- Sets up an object store (`cars`) for car information
- Creates indexes for color (`color`) and for color + make (`color`, `make`)
- Adds sample car data and performs various queries
- Displays query results in the browser console

## File Structure

- `index.html`: The main HTML file for the example
- `script.js`: Contains all JavaScript code related to IndexedDB

## How to Use

1. Download or clone the project folder.
2. Open the `index.html` file in your browser.
3. Open the developer tools (console) to see the database operations and query results.

## Code Overview

- When the database is first created, the `cars` object store and two indexes (`cars_color`, `color_and_make`) are set up.
- Four sample car records are added.
- The following queries are performed and their results are logged to the console:
  - Query by specific ID
  - Query by color
  - Query by color and make

## Note

This example is intended for learning and practicing the basics of IndexedDB. Feel free to modify and use it as you like.
