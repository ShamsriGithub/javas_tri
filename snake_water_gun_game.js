const array = ["s" , "g" , "w"]
let computer_scores=0
let user_scores=0
let chances = 10
let num

while(chances>0){
  input = prompt("enter s , g or w")
  
let num = Math.floor(Math.random()*3)
  input = input.toLowerCase();

  if(input == 's' || input =='g' || input == 'w'){
    chances--

   if(array[num]=='s' && input=='g'){
    ++user_scores
    alert(`user wins by ${user_scores} , chances left: ${chances}`)
  }
  else if(array[num]=='g' && input=='s'){
    ++computer_scores
    alert(`computer wins by ${computer_scores} , chances left: ${chances}`)
  }
  else if(array[num]=='g' && input=='w'){
    ++user_scores
    alert(`user wins by ${user_scores} , chances left: ${chances}`)
  }
  else if(array[num]=='s' && input=='w'){
    ++computer_scores
    alert(`computer wins by ${computer_scores} , chances left: ${chances}`)
  }
  else if(array[num]=='s' && input=='s'){
    
    alert(`DRAW   computer scores: ${computer_scores} ,user scores: ${user_scores}, chances left: ${chances}`)
  }
  
  else if(array[num]=='g' && input=='g'){
  
    alert(`DRAW   computer scores: ${computer_scores} ,user scores: ${user_scores}, chances left: ${chances}`)
  }
  
  else if(array[num]=='w' && input=='w'){
    
    alert(`DRAW   computer scores: ${computer_scores} ,user scores: ${user_scores}, chances left: ${chances}`)
  }
  
    
  else if(array[num]=='w' && input=='s'){
    ++user_scores
    alert(`user wins by ${user_scores} , chances left: ${chances}`)
  }
  else if(array[num]=='w' && input=='g'){
    ++computer_scores
    alert(`user wins by ${computer_scores} , chances left: ${chances}`)
  }
  }
  else
  {
    alert("not a valid input")
  }
}

  if(computer_scores > user_scores)
  {
    alert("better luck next time! computer won")
  }
  else
  {
    alert("congratulations, you won")
  }
