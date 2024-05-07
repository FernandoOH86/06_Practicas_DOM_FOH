// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showmeButton = document.querySelector('.showme')
console.log(showmeButton)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado')
console.log(h1Pillado)

// 1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll('p')
console.log(p)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon
const pokemonList = document.querySelectorAll('.pokemon')
console.log(pokemonList)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
const testMeData = document.querySelectorAll('[data-function="testMe"]')
console.log(testMeData)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const testMeThird = document.querySelectorAll('[data-function="testMe"]')[2]
console.log(testMeThird)
