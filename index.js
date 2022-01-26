function capitalizeMe(sentence) {
  let words = sentence.split(' ') //split the sentence into words
  let capitalized = []
  words.forEach(word => {
    let capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1) //capitalize the first letter of every word
    capitalized.push(capitalizedWord)
  })
  let converted = capitalized.join(' ')
  return converted
}
module.exports = capitalizeMe
