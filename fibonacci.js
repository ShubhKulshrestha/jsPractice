const number = parseInt(prompt('Enter the number of terms: '));
let a = 0, b = 1, Fibonacci ;
for (let i = 1; i <= number; i++) {
    console.log(a);
    Fibonacci = a + b;
    a = b;
    b = Fibonacci;
}
