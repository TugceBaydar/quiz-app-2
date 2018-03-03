var qanda = [
  {
     question: 'What is the population of California ?',
     answer: '39 million'
  },
  {
     question: 'Who was the book Plague written by?',
     answer: 'albert camus'
  },
  {
     question: '16 * 18 ?',
     answer:'288'
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


  for(var i=0; i<qanda.length; i++) {

    var newDiv = document.createElement('div') // for one question template
    var newH1 = document.createElement('h1')
    var newInput = document.createElement('input')
    newDiv.setAttribute('style', 'margin-bottom: 5px; margin-top: 5px;')
    newInput.setAttribute('style', 'width: 40%;')
    var newDiv2 = document.createElement('div') //for whole questions section
    newDiv2.className = 'col-sm-9'
    newDiv.appendChild(newH1)
    newDiv.appendChild(newInput)
    newDiv2.appendChild(newDiv)
    newDiv2.setAttribute('style', 'margin-left: 2%')



    // newDiv3.appendChild(newDiv4)
    // newDiv3.appendChild(newDiv2)


    newH1.textContent = qanda[i].question

    document.body.appendChild(newDiv2)
  }

  var newDiv3 = document.createElement('div');
  newDiv3.className = 'row';
  // var resultsDiv = document.getElementById('resultsDiv') // for correct/incorrect
  // resultsDiv.innerHTML = '<h1 class="correct"> Correct:  <span id="correct"></span></h1>' +
  // '<h1 class="incorrect">   Incorrect:  <span id="incorrect"></span></h1>';
  // document.body.appendChild(newDiv4)
  // newDiv4.className = 'resultsDiv';
  // document.body.appendChild(resultsDiv);
  document.body.appendChild(newDiv3)



  var newBtn = document.createElement('button')
  newBtn.textContent = 'click me'
  newBtn.setAttribute('onclick', 'checkAnswers()')
  newBtn.className = 'btn btn-info py-3 px-5 my-4'
  document.body.appendChild(newBtn)

  function checkAnswers() {
    var inputs= document.getElementsByTagName('input')


    var correct = 0
  	var incorrect = 0

    for(var i=0; i<inputs.length; i++) {
      if(inputs[i].value.toLowerCase() == qanda[i].answer.toLowerCase()) {
        inputs[i].style.border = '2px solid green';

        correct++
      } else {
        inputs[i].style.border = '2px solid tomato';

        incorrect++
      }
    }

    // level of passing the quiz
            if(correct >= 5) {
              alert("you passed the quiz !");
            } else {
              alert("im sorry !!");
            }

      document.getElementById('correct').textContent = correct;
      document.getElementById('incorrect').textContent = incorrect;
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
