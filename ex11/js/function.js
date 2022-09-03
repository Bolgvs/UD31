let list = [];
let dice;
let dice2;

for (let i = 0; i < 36000; i++) {
    dice = Math.floor(Math.random() * (6 - 1) + 1);  
    dice2 = Math.floor(Math.random() * (6 - 1) + 1);

    list.push(dice+dice2);
 
}
console.log(list);