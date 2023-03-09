//Create a function that looks through a given word 
//and checks if the word contains unique characters. 

const isUnique = word => {
  wordSplit = word.split('')
  for(let i=0; i<wordSplit.length; i++){
    for(let j=1; j<wordSplit.length; j++){
      if(wordSplit[i]===wordSplit[j]){
        return true
      }
    }
  }
  return false
}
testWord = 'Apple'
console.log(`It is ${isUnique(testWord)} that ${testWord} has repeating characters`)

// function hasUniqueChars(playstation) {
//   let uniqueChars = new Set([])
//   for (let i = 0; i < playstation.length; i++) {
//     uniqueChars.add(playstation[i])
//   }
//   return uniqueChars.size === playstation.length
// }
// console.log(hasUniqueChars("Playstaion"))


// ALEC'S CODE

// const hasUniqueChars = (word) => {
//   let letters = []

//   for(let i = 0; i < word.length; i++){
//     if(letters.includes(word[i])){
//       return false
//     } else {
//       letters.push(word[i])
//     }
//   }

//   return true
// }

// console.log(hasUniqueChars('word'))
// console.log(hasUniqueChars('Bob'))
// console.log(hasUniqueChars('racecar'))