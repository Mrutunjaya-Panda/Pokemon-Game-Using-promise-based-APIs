# Pokémon Game Using Async/Await and Fetch API

This project is a simple Pokémon game built using **JavaScript**, **HTML**, and **CSS**, where data is fetched dynamically from the **PokéAPI** using the modern **async/await** syntax.  
It demonstrates how asynchronous operations (like fetching Pokémon details) can be handled more cleanly and efficiently compared to traditional Promise chaining — resulting in smoother, more readable, and more maintainable code.

## Description

The game fetches Pokémon details such as names, stats, and images from the PokéAPI and displays them as player cards.  
Two Pokémon are selected, and when the **Fight** button is clicked, their stats are compared to determine the winner.  

Using **async/await**, the code performs asynchronous fetch operations in a synchronous-looking manner. This keeps the UI responsive while the data loads in the background and makes the code much easier to understand and debug.

## Features

- Fetches real-time Pokémon data from PokéAPI using `fetch()` and `async/await`.  
- Cleaner, more readable async code compared to traditional Promises.  
- Dynamically updates the UI based on fetched Pokémon data.  
- Compares Pokémon stats to determine a winner.  
- Includes basic score tracking for both players.  

## How It Works

1. When the page loads, random Pokémon are fetched for each player using the PokéAPI.  
2. The fetching is handled using an `async` function with multiple `await` statements for smooth asynchronous flow.  
3. The Pokémon’s name, image, and stats are displayed on their respective player cards.  
4. When the **Fight** button is clicked, the game compares their stats (like attack or speed) and updates the score.  
5. The process repeats, allowing users to play multiple rounds with new Pokémon.

Example of fetching Pokémon data using **async/await**:

```js
async function getPokemonData(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data.name, data.stats);
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
}
```
This approach ensures asynchronous fetching, preventing the browser from freezing during data retrieval.

Why Use Async/Await?

Async/await is syntactic sugar built on top of Promises, offering a simpler and more readable way to handle asynchronous code.

In this project, async/await makes it easier to:

Write asynchronous code that looks synchronous.

Handle errors using a single try/catch block instead of multiple .catch() calls.

Avoid deep Promise chains.

Maintain cleaner and more structured logic for fetching and displaying data.

Additionally, multiple Pokémon can still be fetched in parallel using Promise.all() with async/await:

The game can also be further optimized by refactoring the code to use async/await, which offers an even cleaner syntax while maintaining the same underlying asynchronous behavior.
## How to Run

1. Clone the repository:
    ```
    git clone https://github.com/Mrutunjaya-Panda/Pokemon-Game-Using-promise-based-APIs.git

2. Open the folder and launch index.html in your browser.

3. Click the Fight button to start comparing Pokémon stats.

4. Refresh or play again to fetch new Pokémon each round.

Author: Mrutunjaya Panda
API Source: https://pokeapi.co/
