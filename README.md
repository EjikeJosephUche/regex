# regex
This app creates takes an input from a user and validates it against a pattern provided and tells the user whether it is a Master card, Visa, American Express or Verve and also tells the user "Not valid" If the user doesn't input a number that follows the pattern for the various card issuers.
A break down of the pattern used is explained below:

Note: the caret (^) means it must start with a particular pattern and dollar ($) means it must end with the pattern that preceeds it

### Master Card
masterPattern = /^(5[1-5]\d{14}|22[2-9][0-9]\d{12}|2[3-6][0-9]{2}\d{12}|27[0-1][0-9]\d{12}|2720\d{12})$/;
 This pattern accepts numbers that must start with either between 51-55 or 2220-2720 and should contain a total of 16 digits

### Visa Card
visaPattern = /^(4[0-9]{12}|4[0-9]{15})?$/;
This pattern accepts cards that starts with 4 and any other digits and they must be either 13 or 16 digits in total

### American Express Card
americanExpressPattern = /^3[47][0-9]{13}$/;
This pattern accepts numbers that starts with 34 or 37 and has a total of 15 digits.

### Verve Card
vervePattern = /^((506(0|1))|(507(8|9))|(6500))[0-9]{12,15}$/;
This pattern accepts numbers that starts with 506 and is followed by a 0 or 1, or 507 followed by 8 or 9, or 6500 and is then followed by numbers not less than 12 digits and not greater than 15 digits
