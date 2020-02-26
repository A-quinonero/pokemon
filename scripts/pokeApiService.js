'use strict';


const connectToApi = () => {
  const section = document.querySelector('.pokemon-list');

 for (let i = 1; i < 22; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        /* console.log(pokemon) */
        const article = document.createElement('article')
        article.innerHTML = `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
          <div>
            ${pokemon.types.map(pokemonType => `<p class="pokemon-type-label">${pokemonType.type.name}</p>`).join('')}
          </div>
        `
        section.appendChild(article);
      })
      .catch(function (error) {
        return error;
      })
  }
}

connectToApi();