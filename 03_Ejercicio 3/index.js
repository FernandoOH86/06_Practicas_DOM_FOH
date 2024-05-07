// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulPaises = document.createElement('ul')
countries.forEach((pais) => {
  const liPais = document.createElement('li')
  liPais.textContent = pais
  ulPaises.appendChild(liPais)
})
document.body.appendChild(ulPaises)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminar = document.querySelectorAll('.fn-remove-me')
eliminar.forEach((elemento) => {
  elemento.remove()
})

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divCoches = document.querySelector('[data-function="printHere"]')
const ulCoches = document.createElement('ul')
cars.forEach((coche) => {
  const liCoche = document.createElement('li')
  liCoche.textContent = coche
  ulCoches.appendChild(liCoche)
})
divCoches.appendChild(ulCoches)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesNew = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countriesNew.forEach((count) => {
  const divCount = document.createElement('div')
  const h4Title = document.createElement('h4')
  h4Title.textContent = count.title
  const imgCount = document.createElement('img')
  imgCount.src = count.imgUrl
  imgCount.alt = count.title
  divCount.appendChild(h4Title)
  divCount.appendChild(imgCount)
  document.body.appendChild(divCount)
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
const deleteButton = document.createElement('button')
deleteButton.textContent = 'Eliminar último elemento'
deleteButton.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  lastDiv.remove()
})
document.body.appendChild(deleteButton)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
const divsToDelete = document.querySelectorAll('div')
divsToDelete.forEach((div, index) => {
  const divDelButton = document.createElement('button')
  divDelButton.textContent = `Eliminar elemento ${index + 1}`
  divDelButton.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(divDelButton)
})
