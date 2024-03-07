const btnMenu = document.querySelector('#btn')
const list = document.querySelector('#list')
let i = 1

btnMenu.addEventListener('click', () => {
  if ( i % 2 === 0) {
    list.innerHTML = ''
  } else {
    list.innerHTML = addListMenu()
  }
  i = i + 1
})

function addListMenu() {
  return`
  <div>
    <li style="font-size: 18px; color: black; margin: 10px;"><a style="color: white" href="https://www.google.com/webhp?hl=ru&sa=X&sqi=2&pjf=1&ved=0ahUKEwjGtrC3keKEAxU7JhAIHfAYBPYQPAgJ">Element</a></li>
    <li style="font-size: 18px; color: black; margin: 10px;"><a style="color: white" href="https://www.google.com/webhp?hl=ru&sa=X&sqi=2&pjf=1&ved=0ahUKEwjGtrC3keKEAxU7JhAIHfAYBPYQPAgJ">Element</a></li>
    <li style="font-size: 18px; color: black; margin: 10px;"><a style="color: white" href="https://www.google.com/webhp?hl=ru&sa=X&sqi=2&pjf=1&ved=0ahUKEwjGtrC3keKEAxU7JhAIHfAYBPYQPAgJ">Element</a></li>
  </div>
  `
}
