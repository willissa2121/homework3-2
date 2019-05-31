









//generates correct mp3 file
let makeMusic = (word) => {
  
  if (word[0] === 's' && word[1] === 'p') {
    var sponge = document.getElementById("audioS")
    sponge.play()
  }
  else if (word[0] === 'p') {
    var power = document.getElementById("audioP")
    power.play()
  }
  else if (word[0] === 'o') {
    var office = document.getElementById("audioO")
    office.play()
  }
  else if (word[0] === "g") {
    var ghost  = document.getElementById("audioG")
    ghost.play()
  }
  else if (word[1] === "t") {
    var wars  = document.getElementById("audioW")
    wars.play()
  }
  else if (word[0] === 's' && word[1] === 'i'){
    var jerry  = document.getElementById("audioJ")
    jerry.play()
  }
  else {
    var friends = document.getElementById("audioF")
    friends.play()
  }


}



let stopMusic = (word) => {
  
  if (word[0] === 's' && word[1] === "p") {
    var sponge = document.getElementById("audioS")
    sponge.pause()
  }
  else if (word[0] === 'p') {
    var power = document.getElementById("audioP")
    power.pause()
  }
  else if (word[0] === 'o') {
    var office = document.getElementById("audioO")
    office.pause()
  }
  else if (word[0] === "g") {
    var ghost  = document.getElementById("audioG")
    ghost.pause()
  }
  else if (word[0] === "s" && word[1] === "t") {
    var wars  = document.getElementById("audioW")
    wars.pause()
  }
  else if (word[0] === 's' && word[1] === 'i'){
    var jerry  = document.getElementById("audioJ")
    jerry.pause()
  }
  else {
    var friends = document.getElementById("audioF")
    friends.pause()
  }


}
// let runEvent = (word) => {
//   makeMusic(word)
// }




// return random word as an array

let library = () => {
  let wordList = ['spongebob', 'powerranger', 'friends', 'office', 'ghostbusters', 'starwars', 'sienfield']
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

let runEvent = () => {
  

  if (gameStart === false) {
    for (var i = 0; i < 2; i++) {
      let hideMe = document.getElementsByClassName('container-hide')[i]
      hideMe.style.visibility = "visible"

    }
    



    

    gameStart = true;
  }


  

  let audio = document.getElementById("audio")
  
    audio.play()
    


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


  if (letters.length === 1) {
    document.getElementsByClassName('body-part')[0].style.display= "block"
    // var audio = new Audio('PRmusic.mp3');
    // audio.play()
  }
  else if (letters.length === 2) {
    document.getElementsByClassName('body-part')[1].style.display= "block"
  }
  else if (letters.length === 3) {
    document.getElementsByClassName('body-part')[2].style.display= "block"
  }
  else if (letters.length === 4) {
    document.getElementsByClassName('body-part')[3].style.display= "block"
  }
  else if (letters.length === 5) {
    document.getElementsByClassName('body-part')[4].style.display= "block"
  }
  else if (letters.length === 6) {
    document.getElementsByClassName('body-part')[5].style.display= "block"
  }
}

////////////////////////////////////////////////////////////////////



// Pre declared variables for keyup function

let word = library()
window.onload = makeMusic(word)
// runEvent(word)
let array = genString(word)
let loseArray = []
let losecount = 0
let guesses = 6
let counter = 0
let gameStart = false
let defaultSong = true


////////////////////////////////////////////////////////////////////

document.onkeyup = function (event) {

  // Music trigger only

  // makeMusic(word)



  // makes sure only letters or spacebar are hit
  if ((event.keyCode > 64 && event.keyCode < 91 || event.keyCode === 32) && (document.getElementsByClassName("container-hide")[0].style.visibility = "none") && gameStart > 0) {

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
      document.getElementById("answer").textContent = word
      document.getElementById("guesses-left").innerHTML = guesses
      document.getElementById('jumbotron').setAttribute("id", "lose-jumbo")
      document.getElementById("lose-jumbo").textContent = "LOSER"
      counter++
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
      document.getElementById("jumbotron").setAttribute("id", "win-jumbo")
      document.getElementById("win-jumbo").textContent = "WINNER WINNER CHICKEN DINNER"
      wins = 0



      // document.location.reload()
    }
  }
}


// reloads doc

let reload = () => {
  let audio = document.getElementById('audio')
  audio.pause();
  if (counter === 1) {
    document.getElementById('lose-jumbo').setAttribute("id", "jumbotron")
    
    document.getElementById('jumbotron').textContent = 'Hangman';
    counter = 0;
  }
  else if (counter !== 1) {
    document.getElementById('win-jumbo').setAttribute("id", "jumbotron")
    document.getElementById('jumbotron').textContent = 'Hangman'
    counter = 0;
  }
  // for(var i = 0; i < loseArray.length; i ++){
  //   loseArray[i].pop
  // }

  //hard resets of everything

  // runEvent()
  
  loseArray = []
  console.log(loseArray)
  document.getElementById("wrong-guess").textContent = loseArray
  guesses = 6;
  document.getElementById("guesses-left").innerHTML = guesses
  stopMusic(word)
  word = library()
  
  makeMusic(word)
  array = []
  array = genString(word)
  
  document.getElementById("answer").textContent = array
    for (var i = 0; i < 6; i ++){
      document.getElementsByClassName("body-part")[i].style.display = "none"
    }



  // document.location.reload()
}





console.log(word)

