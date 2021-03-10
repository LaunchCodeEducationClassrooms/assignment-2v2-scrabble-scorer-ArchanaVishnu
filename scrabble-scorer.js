// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word="") {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt()
{
    let word=input.question("Let's play some scrabble! \nEnter a word:");
    //console.log(oldScrabbleScorer(word)));
    return word;
}

function simpleScore(word="")
{
  let score=0;
  for(let i=0;i<word.length;i++)
   score+=1;
  return score; 
}

function vowelBonusScore(word="")
{
  let score=0;
  word=word.toUpperCase();
  for(let i=0;i<word.length;i++)
  {
    
    if(word[i]=="A"||word[i]=="E"||word[i]=="I"||word[i]=="O"||word[i]=="U")
    {
      score=score+3;
    } 
    else
    {
      score=score+1;
    }
  }

  return score; 
}

function scrabbleScore(word="")
{
  word = word.toUpperCase();
	let score=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (item in newPointStructure) {
 
		 if (item==word[i]) {
			score=score+newPointStructure[item];
		 }
 
	  }
	}
	return score;
}

const scoringAlgorithms = [
  {
    name: "Simple score",
    description: "each letter worth 1 point",
    scorerfunction: simpleScore
  },

  {
    name: "Bonus vowels",
    description: "vowels worth 3 and consonants worth 1",
    scorerfunction: vowelBonusScore
  },

  {
    name: "Scrabble",
    description: "Traditional scoring algorithm",
    scorerfunction: scrabbleScore
  }
];

function scorerPrompt() 
{
let option=input.question("Which scoring algorithm would you like to choose?\n0- Simple: one point per character\n1-Vowel Bonus: Vowels are worth 3 points\n2-Scrabble: Use scrabble point system\nEnter 0, 1, or 2:");
return option;
}

function transform(pointStrucure) 
{
  let key=[];
  let value;
  for(item in pointStrucure)
  {
    value=Number(item);
    key=String(pointStrucure[item]);
    for(let i=0;i<key.length;i++)
    {
      newPointStructure[key[i]]=value;
    }
  }
}

let newPointStructure = {
  
};

function runProgram() {
   let word=initialPrompt();
   let index=scorerPrompt();
   transform(oldPointStructure);

   console.log(`score for '${word}' :${scoringAlgorithms[index].scorerfunction(word)}`);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

