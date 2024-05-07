// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const divToPrint = document.querySelector('[data-function="printHere"]')
const ulLugares = document.createElement('ul')
places.forEach((place) => {
  const liLugar = document.createElement('li')
  liLugar.textContent = place
  ulLugares.appendChild(liLugar)
})
divToPrint.appendChild(ulLugares)
// document.body.appendChild(divToPrint)
