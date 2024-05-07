// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div')
document.body.appendChild(div)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement('div')
const p = document.createElement('p')
p.textContent = 'Este es el párrafo, que está dentro del div'
divConP.appendChild(p)
document.body.appendChild(divConP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const divConSeisP = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const par = document.createElement('p')
  par.textContent = `Este es el párrafo ${i + 1}`
  divConSeisP.appendChild(par)
}
document.body.appendChild(divConSeisP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const pDinamic = document.createElement('p')
pDinamic.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamic)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Insert = document.querySelector('h2.fn-insert-here')
h2Insert.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulApps = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ulApps.appendChild(li)
})
document.body.appendChild(ulApps)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.querySelectorAll('.fn-remove-me')
eliminar.forEach((elemento) => {
  elemento.remove()
})

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div')
const pDivisor = document.createElement('p')
pDivisor.textContent = 'Voy en medio!'
divs[0].parentNode.insertBefore(pDivisor, divs[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const divInsert = document.querySelectorAll('.fn-insert-here')
divInsert.forEach((div) => {
  const pInsert = document.createElement('p')
  pInsert.textContent = 'Voy dentro!'
  div.appendChild(pInsert)
})
