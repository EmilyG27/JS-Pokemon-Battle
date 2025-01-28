const pokemonForm = document.querySelector('form')
const pokemonImage = document.querySelector('#userImg')
const pokemonName = document.querySelector('#userName')
const userCard = document.querySelector('#usercard')
const btnContainer = document.querySelector('#btn-container')
const enemyPokemonImg = document.querySelector('#enemyPokemonImg')
const enemyCard = document.querySelector('#enemyCard')
const enemyPokemonName = document.querySelector('#enemyPokemonName')

const getPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        pokemonImage.src = data.sprites.front_default
        createBattleBtn()
    })
    .catch((error) => {
        console.log(error)
    })
}

pokemonForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokemonInput = document.querySelector('#pokemonInput').value
    getPokemon(pokemonInput)
})

const createBattleBtn = () => {
    const battleButton = document.createElement('button')
    battleButton.classList = 'btn btn-danger'
    battleButton.textContent = 'Battle'
    battleButton.id = 'battle-btn'
    if(!document.querySelector('#battle-btn')){
        btnContainer.append(battleButton)
        battleButton.addEventListener('click', getEnemy)
    }
}

const getEnemy = async () => {
    const randomPokemon = Math.floor(Math.random() * 152)
    console.log(randomPokemon)
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        const data = await response.json()
        enemyPokemonImg.src = data.sprites.front_default
    } catch(err) {
        console.log(err)
    }
}