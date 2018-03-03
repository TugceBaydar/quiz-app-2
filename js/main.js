
var questions = [
  {
     question: 'What is the population of California ?',
     answer: '39 million'
  },
  {
     question: 'Who was the book Plague written by?',
     answer: 'albert camus'
  },
  {
     question: 'What is the song you are listening to?',
     answer:'kldnk'
  },
  {
     question: 'Who said "What doesnt kill you makes you stronger?"',
     answer: 'Nietzsche'
  },
  {
     question: 'Who was the book The Stranger written by?',
     answer: 'Albert Camus'
  },
  {
     question: 'Where is Turkey on the map ?',
     answer: 'Eurasia'
  },
  {
     question: 'What language is spoken in Turkey ?',
     answer: 'turkish'
  },
  {
     question: 'What language is this "es un camino va a una nueva vida" ?',
     answer: 'spanish'
  },
  {
    question: '2 + 2 ?',
    answer: '4'
  },
  {
     question: 'What is the secret of happiness?',
     answer: 'Patient'
  }
]
 //identfying questions
 for(var i = 0; i < questions.length; i++) {

    var q = questions[i].question

    var x = document.getElementById('q' + [i])

      console.log(q, x)

      x.textContent = q
  }


function result() {

  var correct = 0
	var incorrect = 0

  for(var i=0; i<questions.length; i++) {

    var answer = questions[i].answer
    var userAnswer = document.getElementById('a' + [i]).value
    var resultAction = document.getElementById('q' + [i])


    if (answer.toLowerCase() == userAnswer.toLowerCase()) {
      resultAction.className = 'correct'

      correct++
    }
    else {

      resultAction.className = 'incorrect'

      incorrect++
    }



  }

// level of passing the quiz
        if(correct >= 5) {
          alert("you passed the quiz !")
        } else {
          alert("im sorry !!")
        }

  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect




}

 // if you cant answer in 5 seconds you ll not be able to pass the next question

var y = document.getElementsByTagName('input')

for(var i=1; i<y.length; i++) {

  y[i].setAttribute('disabled', true)
}

  var counter = 0  // a varibable to count correct questions answered in 8 seconds
  setInterval(function(){
  y[counter].removeAttribute('disabled')
  if(counter>0) {
  y[counter-1].setAttribute('disabled', true) // to disable the previos question again
}
  counter++
},5000

)
