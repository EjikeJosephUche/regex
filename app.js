/**
 * An app that takes an input and verifies if it's either a MasterCard, Visa, American Express, Verve or an invalid number
 * Program: Learnable-24 Internship (Backend)
 * Author: Joseph Uche
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
    
});

// A function for receiving various cards numbers and verifying their issuing institution
    const getCardType = function (cardNumber){
        cardNumber.replace(/\s+/, ''); // used to remove any white space

        // Pattern to match various cards like Mastercard, Visa and Verve Cards
        const masterPattern = /^(5[1-5]\d{14}|22[2-9][0-9]\d{12}|2[3-6][0-9]{2}\d{12}|27[0-1][0-9]\d{12}|2720\d{12})$/;
        const visaPattern = /^(4[0-9]{12}|4[0-9]{15})?$/;
        const vervePattern = /^((506(0|1))|(507(8|9))|(6500))[0-9]{12,15}$/;
        const americanExpressPattern = /^3[47][0-9]{13}$/;

        if (masterPattern.test(cardNumber)){
            return 'Master Card';
        } else if (visaPattern.test(cardNumber)){
            return 'Visa Card';
        } else if (vervePattern.test(cardNumber)){
            return 'Verve Card';
        } else if (americanExpressPattern.test(cardNumber)){
            return 'American Express'
        } else {
            
            return 'Not a valid Card';
        }
    }
    
    // A recursive function to get the user input until the user exits the program by typing 'exit'
    function askUser (){
        rl.question("Input the card Number or type 'exit' to quit: ", (answer) => {
            // converts the users response to lowercase
            if (answer.toLocaleLowerCase() === 'exit'){
                console.log("Exiting the program...");
                rl.close();
            } else {
                console.log(`This card is:  ${getCardType(answer)}`);
                askUser()
            }
        })
    }
    askUser();
    
    // test American express 371449635398431
    // Test MasterCard 5105105105105100
    // Test Visa Card 4111149635398431
    // Test Verve Card 6500021234567890
