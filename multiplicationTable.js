
const num = parseInt(prompt('Enter the number:'));
for(let i = 1; i <= 10; i++) {
  const mulTable = i * num;
  console.log(`${num} * ${i} = ${mulTable}`);
}
