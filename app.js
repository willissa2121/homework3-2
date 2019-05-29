
let library = () => {
  let wordList = ['gorilla' , 'powerranger' , 'bootcamp', 'working']
  let number = Math.floor(Math.random()*3)
  let word = wordList[number]
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
console.log(library())

let word = library()
let array = genString(word)
let loseArray = []
let losecount = 0
let guesses = 6
let winCount = 0


document.onkeyup = function (event) {

  if (event.keyCode > 64 && event.keyCode < 91 || event.keyCode === 32) {


    let t = 0
    while (t < 1) {
      for (var i = 0; i < word.length; i++) {
        if (event.key === word[i]) {
          array.splice(i, 1, event.key)
          winCount ++
 
        }

        else if (loseArray.indexOf(event.key) === -1 && event.key !== word[i] && word.indexOf(event.key) === -1) {
          // array.push(i,1," - ")
          losecount++
          loseArray.push(event.key)
          guesses --



        }
      }
      document.getElementById("answer").innerHTML = array
      console.log(loseArray)
      document.getElementById("wrong-guess").innerHTML = loseArray
      
      document.getElementById("guesses-left").innerHTML = guesses
      if(guesses === 0){
        document.getElementById("guesses-left").innerHTML = guesses
        alert("god your trash")
        document.location.reload()
      }

      t++
    }
    if(winCount === word.length){
      console.log('you win')
      window.setTimeout(reload, 1000)
      // document.location.reload()
    }
  }
}
let reload = () => {
  document.location.reload()
}
