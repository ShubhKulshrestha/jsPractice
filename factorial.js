let fact = 1,i;
let number = parseInt(prompt('Enter the number:'));
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    console.log("The factorial of the number is", fact);
