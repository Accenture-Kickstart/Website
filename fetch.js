const pokemonImage = document.getElementById('pokemonImage');
console.log(pokemonImage)

const getPokemon = () => {
    console.log("get Pokemon")
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
    .then( res => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites['front_default']
        };
        console.log(pokemon)
        display(pokemon);
    });
};

const display = (pokemon) => {};

getPokemon();