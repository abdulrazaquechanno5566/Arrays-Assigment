// Question# 01;
// Creating an Array containing string elements;
let fruits:string[] = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);


// Question # 02;
//Creating an Array containing numbers;
let numbers:number[] = [10, 20, 30, 40];
console.log(numbers);


// Question# 03;
// Accessing the third element of fruit array;
let thirdFruit = fruits[2];
console.log(thirdFruit);


// Question# 04;
//changing the second element with 25;
let numberChanged = numbers[1] = 25;
console.log(numberChanged);

// Question# 05;
// Add an element to the end of an Array;
 let addFruit = fruits.push("Grapes");
 console.log(fruits);


 // Question# 06;
 // Remove last element from an Array;
 let lastFruit = fruits.pop();
 console.log(fruits);

 // Question# 07;
 // Remove the first element from an Array;
 let firstFruit = fruits.shift();
 console.log(fruits);


 //Question# 08;
 // Add the element to the begining of an array;
 let addFruitFirst = fruits.unshift("Kiwi");
 console.log(fruits);


 //Question# 09;
 // Remove 2 elements fronm the fruits Array starting from index 1 using method;
 let removedFruits = fruits.splice(1,2);
 console.log(fruits);


 // Question # 10;
 //insert elements to the index2;
 let InsertFruitIndex = fruits.splice(2,0,"Pineapple", "Pear");
 console.log(fruits);


 // Question# 11;
 // Create a new Array named citrusFruits, containing first two elements of fruit Array, Using method;
 let citrusFruits = fruits.splice(2,2)
 console.log(fruits);


 // Question# 12;
 // Create a new Array named lastTwoFruits, Containing last two elements of fruit Array, using method;
 let lastTwoFruits = fruits.splice(2,0);
 console.log(fruits);


