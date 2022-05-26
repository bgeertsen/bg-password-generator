# Password Generator Starter Code

To make the password generator I first started by making utility functions as well as an object with all the possible characters for the password

The first utility function makes a random integer.

The second utility function only lets the user select a password length between 8 and 128 characters.

The generatePassword function then starts with two empty variables. A character pool and the random password.

Then I made a series of confirms to be able satisfy the users password criteria.

After the user confirms their options, each option gets added into the pool of possible characters for the password.

Then I created a loop that iterates through each time for the selected password length.

Each time through the loop it selects a random character from the pool of selected options.

At the end of the generatePassword function it returns the randomly created password based on the users criteria. The given functions in the starter code then trigger the functions I wrote and displays the end result in the box.


![Alt text](./assets/password-generator-screenshot.jpg?raw=true "Screen Shot")