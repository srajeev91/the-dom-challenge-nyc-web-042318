const theCounter = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const plusButton = document.getElementById('+');
const minusButton = document.getElementById('-');
const heartButton = document.getElementById('<3');
const commentForm = document.getElementById('comment-form');
const commentSection = document.getElementById('list')
const likeSection = document.getElementById('likes')

let likeCount

let count = parseInt(theCounter.innerText)
const increment = function () {
  count++
  theCounter.innerText = count
}

const decrement = function () {
  count--
  theCounter.innerText = count
}

let timer = window.setInterval(increment, 1000)
let clicked = true

let isClicked = function () {
  if (clicked === true) {
    clearInterval(timer)
    pauseButton.innerText = "resume"
    clicked = false
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
  } else {
    timer = window.setInterval(increment, 1000);
    pauseButton.innerText = "pause"
    clicked = true
    plusButton.disabled = false
    minusButton.disabled = false
    heartButton.disabled = false
  }
}

const heart = function() {
 let likes = document.getElementById('likes')
 let el_id = document.getElementById(`number-${count}`)

  if (Array.from(likes.children).includes(el_id)){
    likeCount++;
    document.getElementById(`number-${count}`).innerHTML = `${count} was liked ${likeCount} times`
  } else {
    likeCount = 1
    let newLike = document.createElement('li')
    newLike.setAttribute('id', `number-${count}`)
    likes.appendChild(newLike)
    document.getElementById(`number-${count}`).innerHTML = `${count} was liked ${likeCount} times`
  }
}

const addComment = function() {
  event.preventDefault()
  const ul = document.createElement('ul')
  let li = document.createElement('li')
  debugger
  li.innerText = commentForm[0].value
  ul.appendChild(li)
  commentSection.appendChild(ul)
  commentForm[0].value = ''
}

pauseButton.addEventListener('click', isClicked)
plusButton.addEventListener('click', increment)
minusButton.addEventListener('click', decrement)
commentForm.addEventListener('submit', addComment)
heartButton.addEventListener('click', heart)
