let p1Score = 0;
let p2Score = 0;

// DOM elements
const fightBtn = document.getElementById("fight");
const p1Name = document.getElementById("p1_name");
const p2Name = document.getElementById("p2_name");
const p1ScoreSpan = document.getElementById("p1_score");
const p2ScoreSpan = document.getElementById("p2_score");

// Player cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

let allPokemons = [];

// Fetch all Pokémon list once
async function loadAllPokemons() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
    const data = await res.json();
    allPokemons = data.results; // Array of { name, url }
  } catch (error) {
    console.error("Error loading all Pokemons:", error);
  }
}

// Load on start
loadAllPokemons();

// Function to get random Pokémon (returns Pokémon object, not ID)
function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * allPokemons.length);
  return allPokemons[randomIndex];
}

// Function to fetch full Pokémon details
async function getPokemon(url) {
  const res = await fetch(url);
  return await res.json();
}

// Render player card
function renderCard(card, pokemon) {
  card.innerHTML = `
    <div style="text-align:center;">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>
    <div style="margin-top:10px;">
      <span style="font-style:italic; font-size:large;">${pokemon.name}</span>
      <span style="float:right; font-size:large; font-style:italic;">
        ${pokemon.base_experience}
      </span>
    </div>
    <ul style="list-style:none; padding:10px; background:#ddd; margin-top:10px;">
      ${
        pokemon.abilities
          .map(a => `<li style='background:#c6c5c5; margin:4px; padding:4px;'>${a.ability.name}</li>`)
          .join("")
      }
    </ul>
  `;
}

// Fight logic
async function fight() {
  if (allPokemons.length === 0) {
    alert("Pokémon list is still loading. Please wait!");
    return;
  }

  // Pick two random Pokémon
  const p1 = getRandomPokemon();
  let p2;
  do {
    p2 = getRandomPokemon();
  } while (p1.name === p2.name); // avoid same Pokémon

  // Fetch both Pokémon details in parallel
  const [p1Pokemon, p2Pokemon] = await Promise.all([
    getPokemon(p1.url),
    getPokemon(p2.url),
  ]);

  // Render cards
  renderCard(card1, p1Pokemon);
  renderCard(card2, p2Pokemon);

  // Set player names
  p1Name.textContent = "Player 1";
  p2Name.textContent = "Player 2";

  // Decide winner
  if (p1Pokemon.base_experience > p2Pokemon.base_experience) {
    p1Score++;
  } else if (p2Pokemon.base_experience > p1Pokemon.base_experience) {
    p2Score++;
  }

  // Update scores
  p1ScoreSpan.textContent = "Score: " + p1Score;
  p2ScoreSpan.textContent = "Score: " + p2Score;
}

// Add event listener
fightBtn.addEventListener("click", fight);
