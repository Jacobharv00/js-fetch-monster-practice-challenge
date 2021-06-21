// Objectives:
// 3. At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.

// Get Request to get all the monsters
document.addEventListener('DOMContentLoaded', () => {
  const monsterContainer = document.querySelector('#monster-container')
  const createMonster = document.querySelector('#create-monster')
  fetch('http://localhost:3000/monsters/?_limit=50&_page=2')
  .then(resp => resp.json())
  .then(monsters => {
    let monsterEl = monsters.map(function(monster) {
      return `
      <div class='monster'>
      <h2>${monster.name}</h2>
      <span>Age: ${monster.age}</span>
      <p>About: ${monster.description}</p>
      </div>`
    })
    monsterContainer.innerHTML = monsterEl.join('')
  })

// Elements for form
const monsterForm = document.createElement('form')
createMonster.append(monsterForm)
monsterForm.id = 'monster-form'
const nameInput = document.createElement('input')
const ageInput = document.createElement('input')
const descriptionInput = document.createElement('input')
const monsterBtn = document.createElement('button')
monsterForm.append(nameInput, ageInput, descriptionInput, monsterBtn)
// Element Values
nameInput.type = 'text'
nameInput.name = 'name'
nameInput.placeholder = 'Name:'

ageInput.type = 'text'
ageInput.name = 'age'
ageInput.placeholder = 'Age:'

descriptionInput.type = 'text'
descriptionInput.name = 'description'
descriptionInput.placeholder = 'Description:'

monsterBtn.id = 'monster-btn'
monsterBtn.innerText = 'Create Monster'

// EventListener for Form to create a monster
createMonster.addEventListener('submit', (e) => {
  e.preventDefault()
 const nameField = e.target.name.value
 const ageField = e.target.age.value
 const descriptionField = e.target.description.value

 fetch('http://localhost:3000/monsters', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   },
   body: JSON.stringify({
     name: nameField,
     age: ageField,
     description: descriptionField
   })
 })
.then(resp => resp.json())
.then(newMonster => {
  let newMonsterHTML = `
  <div class='monster'>
  <h2>${newMonster.name}</h2>
  <span>Age: ${newMonster.age}</span>
  <p>About: ${newMonster.description}</p>
  </div>`
  monsterContainer.innerHtml += newMonsterHTML
  })
})



const forwardBtn = document.querySelector('#forward')
const backBtn = document.querySelector('#back')
const buttonDiv = document.createElement('div')
buttonDiv.id = 'button-container'
document.body.append(buttonDiv)
buttonDiv.append(backBtn, forwardBtn)



// buttonDiv.addEventListener('click', (e) => {
//   if (e.target.id === 'forward') {
      
//   }

// })

//    fetch('http://localhost:3000/monsters/?_limit=50&_page=2')
//   .then(resp => resp.json())
//   .then(newData => {
//     let newMData = newData.map(function(guy) {
//       return `
//       <div class='monster'>
//       <h2>${guy.name}</h2>
//       <span>Age: ${guy.age}</span>
//       <p>About: ${guy.description}</p>
//       </div>`
//     })
//     monsterContainer.innerHTML = newMData.join('')
//   })






















}) // End of DOMContentLoaded
