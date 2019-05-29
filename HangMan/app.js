
let library = () => {
  let word = "gorilla"
  let wordA = []
  for (var i = 0; i < word.length; i++) {
    wordA.push(word[i])
  }
  return wordA
}

let genString = (word) => {
  let array = []
  for (var i = 0; i < word.length; i++) {
    array.push(" - ")
  }
  return array
}

let word = library()
let array = genString(word)
let loseArray = []
let losecount = 0
let guesses = 6


document.onkeyup = function (event) {

  if (event.keyCode > 64 && event.keyCode < 91) {


    let t = 0
    while (t < 1) {
      for (var i = 0; i < word.length; i++) {
        if (event.key === word[i]) {
          array.splice(i, 1, event.key)
        }
        else if (event.key === array[i]) {

        }
        else if (loseArray.indexOf(event.key) === -1 && event.key !== word[i] && word.indexOf(event.key) === -1) {
          // array.push(i,1," - ")
          losecount++
          loseArray.push(event.key)



        }
      }
      document.getElementById("answer").innerHTML = array
      console.log(loseArray)
      document.getElementById("wrong-guess").innerHTML = loseArray
      guesses --
      document.getElementById("guesses-left").innerHTML = guesses
      t++
    }
  }
}
