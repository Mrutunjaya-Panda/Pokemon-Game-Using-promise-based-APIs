let p1Score = 0;
let p2Score = 0;

//DOM elements
const fightBtn = document.getElementById("fight");
const p1Name = document.getElementById("p1_name");
const p2Name = document.getElementById("p2_name");
const p1ScoreSpan = document.getElementById("p1_score");
const p2ScoreSpan = document.getElementById("p2_score");

//Player Cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

let allPokemons = [];

//fetch all pokemon list once at page load
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
  .then((res) => res.json())
  .then((data) => {
    allPokemons = data.results;
  }).catch((err) => console.error("Error loading Pokemon list:",err));

//function to get random pokemon
function getRandomPokemon() {
  return Math.floor(Math.random() * allPokemons.length);
}

//function pokemon data
function getPokemon(id) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((res) => {
    return res.json();
  });
}

//Render player card
function renderCard(card, pokemon) {
  card.innerHTML = `<div style="text-align:center;">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      </div>
      <div style="margin-top:10px;">
        <span style="font-style:italic; font-size:large;">${pokemon.name}</span>
        <span style="float:right; font-size:large; font-style:italic;">${
          pokemon.base_experience
        }</span>
      </div>
      <ul style="list-style:none; padding:10px; background:#ddd; margin-top:10px;">
        ${pokemon.abilities
          .map(function (a) {
            return (
              "<li style='background:#c6c5c5; margin:4px; padding:4px;'>" +
              a.ability.name +
              "</li>"
            );
          })
          .join("")}
      </ul>`;
}

//fight logic
function fight() {
  // Get random pokemons
  let p1Id = getRandomPokemon();
  let p2Id = getRandomPokemon();

  getPokemon(p1Id).then(function (p1Pokemon) {
    getPokemon(p2Id).then(function (p2Pokemon) {
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
    });
  });
}

//add eventListener to fight button
fightBtn.addEventListener("click",fight);
