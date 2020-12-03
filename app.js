const chalk = require('chalk');

console.log(chalk.red.underline('\n---How much do you know me ???---\n'));


var input = require('readline-sync');

var nameofuser = input.question("Enter Your Name : ");

console.log("\n\tWelcome " + chalk.yellow.bold.underline(nameofuser.toUpperCase()) +" to how much do you know me? quiz \n");



console.log("---------------------------------------");
//questions:-
var input = require('readline-sync')
var score;
var start = input.question("Want to start this quiz now [y/n] ?\n");

if (start==='Y'|| start === 'y' )
{
score=0;
function level1(question,answer)
{   
    var userans;
    userans = input.question(question);

    if(userans==answer)
    { 
      score=score+1;
      console.log(chalk.green("Correct"));
     
     
    } 
    else
    {  
       score=score-1;
      
      console.log(chalk.red("Wrong"));
     

    }
}

  
  var lv1 =[
  
    {
        ques: "1. Whats my nick name\n a. Aman\n b. raja\n c. chotu\n d. no nick name\n",
        answer: "d"
    },

    {
        ques: "2. Whats my Fav colour\n A. red\n B. black \n C. yellow\n D. All of the above\n",
        answer: "b"
    },

    {
        ques: "3. Whats my fav sports \n A. Football\n B. Cricket\n C. Volleyball \n D. non of the above\n",
        answer: "b"
    },

    {
        ques: "4. When is my Birth day\n A. 6th dec \n B. 7th Nov\n C. 25th Nov \n D. 25 Oct\n",
        answer: "a"
    },

    {
        ques: "5. What is my Fav Movie\n A. Dangal \n B. The Space b/w us\n C. Scam 1992\n D. Mirzpur2\n",
        answer: "b"
    }, 
]

for (var i = 0; i<lv1.length; i++) {
   level1(lv1[i].ques,lv1[i].answer);
}


 
} else {
  // Another key was pressed.
  console.log(chalk.yellow.bold.underline('\n\n\t\t Quiz Aborted ')+chalk.red.bold('!!!'));
  // Do something...
}

console.log(chalk.yellow.bold("\n Your  score is : "),chalk.red(score) + "/3");


