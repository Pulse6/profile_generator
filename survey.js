const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let finalAnswer = {}
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  finalAnswer.name = answer;
  // rl.close();
  rl.question("What's an activity you like doing? ", (answer) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    finalAnswer.activity = answer;
    // rl.close();
    rl.question("What do you listen to while doing that? ", (answer) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`);
      finalAnswer.listen = answer;
      // rl.close();
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`);
        finalAnswer.meal = answer;
        // rl.close();
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          // console.log(`Thank you for your valuable feedback: ${answer}`);
          finalAnswer.favouriteFood = answer;
          // rl.close();
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            // console.log(`Thank you for your valuable feedback: ${answer}`);
            finalAnswer.sport = answer;
            // rl.close();
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              // console.log(`Thank you for your valuable feedback: ${answer}`);
              finalAnswer.superpower = answer;
              console.log(`My name is ${finalAnswer.name} and an activity that I enjoy doing is ${finalAnswer.activity}. While doing this activity my favourite thing to listen to is ${finalAnswer.music}. My favourite meal is ${finalAnswer.meal} and my favourite thing to eat is ${finalAnswer.eat}. My absolute favourite sport is ${finalAnswer.sport} and something I’m really good at is ${finalAnswer.superpower}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

// rl.question("What's an activity you like doing? ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.activity = answer;
//   // rl.close();
// });

// rl.question("What do you listen to while doing that? ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.listen = answer;
//   // rl.close();
// });

// rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.meal = answer;
//   // rl.close();
// });

// rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.favouriteFood = answer;
//   // rl.close();
// });

// rl.question("Which sport is your absolute favourite? ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.sport = answer;
//   rl.close();
// });

// rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   answer.superpower = answer;
//   rl.close();
// });