//A function that parses the Preamble to the US Constitution and returns a count of how many words begin with 't', how many end with 'e' and how many begin with 't' and end with 'e'. 

const preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."

function constitutionParse(a) {
  //The first thing I wanted to do was to strip away all the punctuation from the string.  I used a simple replace i.e.(a.replace(",", "")) but then I realized that it was only doing it to the first instance of the comma. In my searches I found this pretty slick expression [^\w\s]|_.  It will strip anything that is not a number, letter, whitespace, or underscore.  Then adding the g makes it a global modifier and will do for every instance instead of just the first.
  let stripPunctuation = a.replace(/[^\w\s]/g, '')
  // I then split all the words up and put them in an array
  let wordArray = stripPunctuation.split(" ")
  //Counts
  let tStartCount = 0
  let eEndCount = 0
  let tStartEEnd = 0
  //For every word in my array
  for (word of wordArray) {
    // Check to see if the first character is equal to "T"
    if(word[0] === 't') {
      //if so increase tStartCount tally by one
      tStartCount += 1
    } 
    //At first I made this an "else if" but I realized that it would then skip all words that begin with "T" and not check to see if they end with "E".
    //check the last character of the word and if it is equal to e
    if(word.slice(-1) === 'e') {
      //if so increase eEndCount tally by one
      eEndCount += 1
    }
    //Check to see if the first character is equal to "T" AND if the last character is equal to "E"
    if(word[0] === 't' && word.slice(-1) === 'e') {
      //if so increase tStartEEnd tally by one
      tStartEEnd += 1
    }
  }
  console.log(`The number of words that start with the letter 'T' is ${tStartCount} and the number of words that end with the letter 'E' is ${eEndCount}. The number of words that start with 'T' and end with 'E' is ${tStartEEnd}.`)
}

constitutionParse(preamble)




