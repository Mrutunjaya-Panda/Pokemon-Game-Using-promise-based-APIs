# Pokémon Game Using Promise-Based APIs

This project is a simple Pokémon game built using **JavaScript**, **HTML**, and **CSS**, where data is fetched dynamically from the **PokéAPI** using **Promises**.  
It demonstrates how asynchronous operations (like fetching Pokémon details) can be efficiently handled using `fetch()` and Promise chaining to create a smooth and interactive game experience.

## Description

The game fetches Pokémon details such as names, stats, and images from the PokéAPI and displays them as player cards.  
Two Pokémon are selected, and when the **Fight** button is clicked, their stats are compared to determine the winner.  

The entire flow — from fetching Pokémon data to updating the UI — is handled asynchronously using **Promise-based APIs**, ensuring that the page remains responsive and non-blocking even while data is being retrieved from the server.

## Features

- Fetches real-time Pokémon data from PokéAPI.  
- Uses JavaScript Promises for handling asynchronous operations.  
- Dynamically updates the UI based on the fetched Pokémon data.  
- Compares Pokémon stats and displays the winner.  
- Includes basic score tracking for both players.  

## How It Works

1. When the page loads, random Pokémon are fetched for each player using the PokéAPI.  
2. Each `fetch()` call returns a Promise, which is handled using `.then()` to retrieve and process the data.  
3. The fetched Pokémon data (name, image, and stats) are displayed in the game cards.  
4. When the **Fight** button is clicked, the game compares their stats (like attack or speed) and updates the score.  
5. The process repeats, allowing users to play multiple rounds with new Pokémon.

Example of fetching Pokémon data using Promises:

```js
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(data => {
    // Display Pokémon details
    console.log(data.name, data.stats);
  })
  .catch(error => console.error('Error fetching Pokémon:', error));

```
This approach ensures asynchronous fetching, preventing the browser from freezing during data retrieval.

Why Use Promises?

Promises allow asynchronous operations to be handled more cleanly compared to traditional callback functions.
In this project, Promises make it easier to:

Fetch multiple Pokémon in parallel.

Wait for all data to load before updating the UI.

Handle errors gracefully using .catch().

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
