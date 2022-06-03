/*
If Statement
We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:
*/

//Example
if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!

  /*
  Notice in the example above, we have an if statement. The if statement is composed of:

The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.

Inside the parentheses (), a condition is provided that evaluates to true or false.

If the condition evaluates to true, the code inside the curly braces {} runs, or executes.

If the condition evaluates to false, the block won’t execute.

*/

//If else statements

/*
If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:
*/

//Example

if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }