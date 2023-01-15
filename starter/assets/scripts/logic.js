let start = document.querySelector("#start")
let startScreen = document.getElementById("start-screen")
let choicesE1 = document.querySelector("#choices")
let quizTime = document.getElementById("time")
let endScreen = document.getElementById("end-screen")

function countdown() {
    var timer = 5;
  
    let timeInterval = setInterval(function () {
        quizTime.innerHTML = 
        timer--;
      if (timer === -1) {
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }


//document.querySelector("#question-title").textContent = questions[0].questionTitle


function renderQuestion() {
    
    for (let i = 0; i < questions.choices; i++) {
        let choice = questions.choices[i]

        let li = document.createElement("li");
        li.textContent = choice[i];
        todoList.appendChild(li);
        li.setAttribute("data-index", i);
    }
    
}

let currentQuestion = 0;
// give data-index to choices button so when button is clicked we can see what index it is

choicesE1.addEventListener("click", function(event){
    
    if (event.target.matches("button")){

        console.log(event.target.getAttribute("data-index"))

    }
    else {
        timer -= 10
    }

})

// press start button to start the quiz, hides start screen and begins countdown
start.addEventListener("click", function(event){
    
        if (event.target.matches("button")){
    
            startScreen.setAttribute("class", "hide");
            countdown();
            renderQuestion();
           

        }
})

function endQuiz() {
    
    endScreen.setAttribute("class", "active");
    
}