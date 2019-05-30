
// return random word as an array

let library = () => {
  let wordList = ['sponge' , 'powerranger' , 'friends']
  let number = Math.floor(Math.random() * wordList.length)
  let word = wordList[number]
  let wordA = []
  for (var i = 0; i < word.length; i++) {
    wordA.push(word[i])
  }
  return wordA
}
// generates empty string same length as word

let genString = (word) => {
  let array = []
  for (var i = 0; i < word.length; i++) {
    array.push(" - ")
  }
  return array
}

// Pre declared variables for keyup function

let word = library()
let array = genString(word)
let loseArray = []
let losecount = 0
let guesses = 6



document.onkeyup = function (event) {

  //Music trigger only



  // makes sure only letters or spacebar are hit
  if (event.keyCode > 64 && event.keyCode < 91 || event.keyCode === 32) {

    // Loops for one iteration of keyup, T will reset at zero each keypress
    let t = 0
    while (t < 1) {
      for (var i = 0; i < word.length; i++) {
        if (event.key === word[i]) {

          array.splice(i, 1, event.key)

        }

        else if (loseArray.indexOf(event.key) === -1 && event.key !== word[i] && word.indexOf(event.key) === -1) {
          // array.push(i,1," - ")
          losecount++
          loseArray.push(event.key)
          guesses--


        }
      }

      // adds in text content to the string containing right answers and the wrong ansers
      document.getElementById("answer").textContent = array
      console.log(loseArray)
      document.getElementById("wrong-guess").textContent = loseArray

      document.getElementById("guesses-left").textContent = guesses


      t++
    }

    //Losing game conditional

    if (guesses === 0) {
      document.getElementById("guesses-left").innerHTML = guesses
      document.getElementById('jumbo').setAttribute("id", "lose-jumbo")
      document.getElementById("lose-jumbo").textContent = "LOSER"
      window.setTimeout(reload, 3000)
    }


    // Sends array to check if string is full letters and no more dashes

    let wins = getWin(array)
    console.log(wins)
    //What is currently generating the body of the hangman

    bodyGen(loseArray)


    if (wins === word.length) {
      console.log('you win')
      window.setTimeout(reload, 3000)
      document.getElementById("jumbo").setAttribute("id", "win-jumbo")
      document.getElementById("win-jumbo").textContent = "WINNER WINNER CHICKEN DINNER"
      
      // document.location.reload()
    }
  }
}


// reloads doc

let reload = () => {
  document.location.reload()
}



// takes in string and checks number of dashes to see if winner or not

let getWin = (array) => {
  let winCount = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== " - ") {
      winCount++
    }
  }
  return winCount
}

let bodyGen = (letters) => {
  if (letters.length === 1){
    document.getElementById("head").style.display = "block"
    var audio = new Audio('PRmusic.mp3');
    audio.play()
  }
  else if (letters.length === 2){
    document.getElementById("body").style.display = "block"
  }
  else if (letters.length  === 3){
    document.getElementById("right-arm").style.display = "block"
  }
  else if (letters.length  === 4){
    document.getElementById("left-arm").style.display = "block"
  }
  else if (letters.length  === 5){
    document.getElementById("left-leg").style.display = "block"
  }
  else if (letters.length  === 6){
    document.getElementById("right-leg").style.display = "block"
  }
}

let makeMusic = (word) => {
  let powerRanger = new Audio('Music/powerRange.mp3');
  let sponge = new Audio('Music/sponge.mp3');
  let friends = new Audio('Music/friends.mp3');
  //Converting array into a string
  let stringMe = ''
  for(var i = 0; i < word.length; i ++){
    stringMe += word[i]
  }

console.log(stringMe)




  //Use once word has been turned into a string

  if (word === "spongebob"){
    sponge.play();
  }
  else if (word === "powerranger"){
    powerRanger.play();
  }
  else if (word === "friends"){
    friends.play();
  }


}
console.log(library())
makeMusic(library())
