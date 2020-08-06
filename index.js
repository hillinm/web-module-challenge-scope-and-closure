// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {

  return callback(stringList[0]);
}
console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?  
 * 
 * counter1 stores count inside the function so it is only available at the function level, counter 2 stores it outside the function which increases it's scope.
 *   
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 has closure because the let statement is available outside of the function at a higher level.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable if you were never going to use count for anything at the global level and counter2 would be preferable because its less code.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
const counter1 = counterMaker();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());


// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(count)
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(maximum){

  points = Math.floor(Math.random() * Math.floor(maximum));
  return points;

}
console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

let Home = 0;
let Away = 0;

function finalScore(inning, numOfInnings) {

      function inning(maximum){
        points = Math.floor(Math.random() * Math.floor(maximum));
        return points;
      }
      for (i = 0; i < numOfInnings; i++) {
        console.log("This is inning " + (i + 1));
        var score = {};
        score.home = Home += inning(3);
        score.away = Away += inning(3);
        console.log(score);
  }
  return score;
}
console.log("This is the final score", finalScore(inning(3), 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


Home = 0;
Away = 0;

function getInningScore(inning, numOfInnings) {
      function inning(maximum){
        points = Math.floor(Math.random() * Math.floor(maximum));
        return points;
      }
      for (i = 0; i < numOfInnings; i++) {
        let inningInGame = (i + 1);
        var score = {};
        score.home = Home += inning(3);
        score.away = Away += inning(3);
        if (inningInGame === 1){
          console.log(`${inningInGame}st inning: ${score.away} - ${score.home}`);
        } else if (inningInGame === 2) {
          console.log(`${inningInGame}nd inning: ${score.away} - ${score.home}`);
        } else if (inningInGame === 3) {
          console.log(`${inningInGame}rd inning: ${score.away} - ${score.home}`);
        } else if (inningInGame >= 4) {
          console.log(`${inningInGame}th inning: ${score.away} - ${score.home}`);
        }
      }
      console.log(`Final Score: ${score.away} - ${score.home}`);
  return score;
}
console.log(getInningScore(inning(3), 9));

