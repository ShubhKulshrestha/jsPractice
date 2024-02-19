//Swap two values using third variable
let a = parseInt(prompt("Enter the first value:"));//5
let b = parseInt(prompt("Enter the second value:"));//6
let c;

c = a;//5
a = b;//6
b = c;//5
console.log(a,b);

//Swap two values without using third variable
let x = parseInt(prompt("Enter the first value:"));//5
let y = parseInt(prompt("Enter the second value:"));//6
x = x + y;
y = x - y;
x = x - y;
console.log(x,y);

//Swap two values using third variable
let p = parseInt(prompt("Enter the first value:"));//5
let q = parseInt(prompt("Enter the second value:"));//6
p = p ^ q; //0101^0110 = 0011
q = p ^ q; //0011^0110 = 0101
p = p ^ q; //0011^0101 = 0110
console.log(p,q);
