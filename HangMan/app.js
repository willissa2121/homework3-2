let input = document.getElementById("letter-guess")
let empty = ""
document.getElementById("answer").innerHTML = createString(word, letter, empty)

//Main function ran onclick in HTML
let runEvent = () => {
  
  let letter = document.getElementById("letter-guess").value
  let answer = document.getElementById("answer")
  let word = "gorilla"

  

  // for (var i = 0; i < )
}

//Makes enter key Submit Button

input.addEventListener("keyup", function(event){
  if (event.keyCode === 13 || event.keycode ===32){
    runEvent()
  }
})


//Generates dashes same length as string
let createString = (word, letter, empty) => {
  
  for (var i = 0; i < word.length; i++){
    if (letter === word[i]){
    empty += letter
    }
    else if (letter != word[i]){
      empty += " - "
      document.getElementById("wrong-guess").innerHTML = letter;
    }
  }
  return empty
}


let storeString = (empty) {
  let goodString = document.getElementById("answer");
  return goodString.innerHTML
}




// let stringIndex = (string , letter) => {
//   let empty = ""

//   for (var i = 0; i < string.length; i++){
//     if (letter === string[i]){
//       empty += letter
//     }
//     else{
//       emtpy += "-"
//     }
//   }
// }
