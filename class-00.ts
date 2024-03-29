#! /usr/bin/env node


//   First Class is intro and installation that already has been decleared:


//       Class-00 project is 'SIMPLE COMMAND LINE CALCULATOR:'

//                 Using Typescript, Node.js and Inquirer.



import inquirer from 'inquirer';// 'import': is basically used in typescript to import functionality from other modules or libraries.
                               // 'inquirer': is the name of the module or library that is being imported. In this case.
                              // ' from "inquirer"': is part specifies the source from which the module is being imported. In this case, it's importing from the "inquirer" module, 
                             // "inquirer": module, which is typically installed via npm (Node Package Manager) and provides functionality for creating prompts and managing user input in command-line applications.



const answers = await inquirer.prompt([ 

{
 type:'number',
 name: 'firstNumber',
 message:'Enter First Number',

},

{
type:'number',
name: 'secondNumber',
message:'Enter Second Number',

},

{
    type:'list',
    name: 'operator',
    message:'Select opertor to perform opertion as you like to perform.',
    choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modules', 'Exponentiation'],

},

]);

console.log(answers);


//  Conditional Statement using if else chain:

if (answers.operator === 'Addition') {     //    Addition
    
    console.log('Your value is ')
console.log(answers.firstNumber + answers.secondNumber);

}else if (answers.operator === 'Subtraction'){     //   Subtraction

    console.log('Your value is ')
console.log(answers.firstNumber - answers.secondNumber);

}else if (answers.operator === 'Multiplication'){        // Multiplication      

console.log('Your value is ')
console.log(answers.firstNumber * answers.secondNumber);

}else if (answers.operator === 'Division'){                 // Division

    console.log('Your value is ')
    console.log(answers.firstNumber / answers.secondNumber);

}else if (answers.operator === 'Modules'){                      // Modules

console.log('Your value is ')
console.log(answers.firstNumber % answers.secondNumber);

}else if (answers.operator === 'Exponentiation'){                  // Exponentiation

    console.log('Your value is ')
    console.log(answers.firstNumber ** answers.secondNumber);
    
}else{

    console.log('Kindly enter a valid number....');
}




//                                      --x-x-x-x-x-x-x-x-x--