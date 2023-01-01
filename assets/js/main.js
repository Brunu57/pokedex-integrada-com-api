const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 8;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
        
        `
        <li class="pokemon ${pokemon.type}">
            <span class="number ${pokemon.type}">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                <img src="${pokemon.photo}" 
                alt="${pokemon.name}"/>
                </div>
                <div class="moreDetails">
                    <ul id="informationsTable">
                        <li class="informations"><span>Health: ${pokemon.hp}</span></li>
                        <li class="informations"><span>Attack: ${pokemon.attack}</span></li>
                        <li class="informations"><span>Defense: ${pokemon.defense}</span></li>
                        <li class="informations"><span>Speed: ${pokemon.speed}</span></li>
                        <li class="informations"><span>Weight: ${pokemon.weight}</span></li>
                    </ul>
                </div>
                </li>
                `
    ).join('')
    pokemonList.innerHTML += newHtml

})
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)

    }

})