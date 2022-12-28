async function consomePokeAPI() {
  const loading = document.querySelector("#loading");
  const pokemonsDaAPI = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .catch((error) => console.log(error));
  // loading.classList.add('hidden')

  // Retorna esse valor convertido
  return pokemonsDaAPI;
}

const carregando = document.querySelector("#loading");
const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("#button-search");


