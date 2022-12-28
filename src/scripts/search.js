async function getPoke(name) {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    carregando.style.display = "none";
  
    return pokemon;
  }
  
  function renderSearch(name) {
    const searchInput = document.querySelector("input");
    const searchBtn = document.querySelector("#button-search");
    const pokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
    searchBtn.addEventListener("click", async () => {
      if (searchInput.value == 0) {
        searchInput.innerHTML = "";
        renderizaPokemons();
      } else {
        searchRender(
          await getPoke(searchInput.value.toLowerCase().trim())
        );
      }
  
    });
  }
  
  async function searchRender(pokemon) {
    const ulTag = document.querySelector("ul");
  
    ulTag.innerHTML = "";
  
      ulTag.insertAdjacentHTML(
        "beforeend",
        `
      <li>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>
          <h3 class="nomePokemon">${pokemon.name}</h3>
      </li>
     `
      );
  
  }
  
  consomePokeAPI();
  renderSearch();
  