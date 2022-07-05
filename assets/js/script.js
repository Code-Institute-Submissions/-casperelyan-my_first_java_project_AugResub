console.log("Welcome to flag chalange");

const startButton =document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')


startButton.addEventListener("click", startQuiz)


function startQuiz() {
    startButton.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
      }
   


function setNextQuestion(){
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
