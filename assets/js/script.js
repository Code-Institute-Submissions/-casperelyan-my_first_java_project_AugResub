console.log("Welcome to flag chalange");


const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const startButton =document.getElementById("start-btn")

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})



function startQuiz() {
    startButton.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
      }
   
      

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }



function selectAnswer(){

}



const questions = [
    {
      question: '',
      answers: [
        { text: '', correct:  },
        { text: '', correct:  }
        { text: '', correct:  },
        { text: '', correct:  }
      ]
    },

    {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },

      {
        question: '',
        answers: [
          { text: '', correct:  },
          { text: '', correct:  }
          { text: '', correct:  },
          { text: '', correct:  }
        ]
      },]
