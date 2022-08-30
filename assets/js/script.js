const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
//function start game is a adding and removinf no-display class to buttons and should also shuffle question order//

function startGame() {
  startButton.classList.add('no-display')

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('no-display')
  setNextQuestion()
}
//functon is reseting the answered question//
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('no-display')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('no-display')
  } else {
    startButton.innerText = 'Start Again'
    startButton.classList.remove('no-display')
  }
}
//ths function is adding colors to buttons and background - red when wrong answer, green when correct is choosen//
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
//Arrays with question samples//
const questions = [
  {
    question: 'A red circle on a green background is a flag of ?',
    answers: [
      { text: 'Japan', correct: false },
      { text: 'Bangladesh', correct: true },
      {text: 'Cape Verde', correct: false },
      {text: 'Tennesy', correct: false },
    ]
  },
  {
    question: 'The blue and white striped flag with the sun in the middle belongs to which country?',
    answers: [
      { text: 'Kiribati', correct: false },
      { text: 'Argentina', correct: true },
      { text: 'Costarica', correct: false },
      { text: 'North Macedonia', correct: false },
    ]
  },
  {
    question: 'Which mythical animal is on the Welsh flag?',
    answers: [
      { text: 'Phoenix', correct: false },
      { text: 'Serpent', correct: false },
      { text: 'Dragon', correct: true },
      { text: 'Griffin', correct: false }
    ]
  }, 

  {
    question: 'Which is the only country in the world to have a flag with more than four sides?',
    answers: [
      { text: 'Kiribatti', correct: false },
      { text: 'Nepal', correct: true },
      { text: 'Switzerland', correct: false },
      { text: 'Poland', correct: false }
    ]
  }, 

  {
    question: 'Which animal will you find clutching a sword on the Sri Lankan flag?',
    answers: [
      { text: 'Bear', correct: false },
      { text: 'Lion', correct: true },
      { text: 'Cat', correct: false },
      { text: 'Toger', correct: false }
    ]
  }, 

  {
    question: 'Which central African country has a bird on its flag?',
    answers: [
      { text: 'Uganda', correct: true },
      { text: 'Congo', correct: false },
      { text: 'Djibouti', correct: false },
      { text: 'Rwanda', correct: false }
    ]
  }, 

  {
    question: 'Which animal is biting a snake in the centre of the Mexican flag?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Lion', correct: false },
      { text: 'Eagle', correct: true },
      { text: 'Wolverine', correct: false }
    ]
  }, 

  {
    question: 'Which weapon will you find on the flag for Mozambique?',
    answers: [
      { text: 'A spear', correct: false },
      { text: 'A cannon', correct: false },
      { text: 'A machete', correct: false },
      { text: 'An AK47', correct: true }
    ]
  }, 

  {
    question: 'The Albanian flag features an eagle - but how many heads has it got?',
    answers: [
      { text: '5', correct: false },
      { text: '1', correct: false },
      { text: '4', correct: false },
      { text: '2', correct: true },
    ]
  }, 
]