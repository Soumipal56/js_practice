// Basic console usage
// 1. Create two variables: one storing your full name and another
// storing your favorite hobby. Print a sentence in the format:
// My name is <your name> and <your hobby>"
// const nm = "Soumi Pal"
// const hbby = "reading books"
// console.log("My name is " + nm + " and my hobby is " + hbby)


// 2. Perform the arithmetic calculation `45 * 2 - 10` and
// print the final result
// const result = 45 * 2 - 10;
// console.log(result);


// 3. Write a program that retrieves and prints the current year
// using the Date object in JavaScript
// const currentYear = new Date().getFullYear();
// console.log(currentYear);


// 4. Store your first name and last name in two different
// variables, then print your full name in a single output
// const nm = "Soumi"
// const tt = "Pal"
// console.log(nm + " " + tt);


// 5. Create a variable with an initial value. Print its
// value, and print the updated value again
// let a = 10;
// console.log(a);
// a += 1;
// console.log(a);


// 6. Print a custom error message using `console.error()`
// console.error("This is an error message");


// 7. Store a number in a variable and print the square of
// that number
// let num = 5;
// console.log(num * num);


// 8. Create a boolean variable and print its value
// let isJavaScriptFun = true;
// console.log(isJavaScriptFun);


// 9. Store your age in a variable and print whether your
// age is greater than 18
// let age = 21
// if(age > 18){
//     console.log("Age greater than 21");
// }
// else{
//     console.log("Age less than 21");
// }

// 10. Divide `100` by `0` and print the result. Observe
// what JavaScript returns
// const result = 100 / 0;
// console.log(result); // Outputs: Infinity

// Variables and Data Types
// 11. Create a variable using `let` and print its value
// let nm = "Soumi"
// console.log(nm);

// 12. Declare a constant named `PI` with the value `3.14`
// and print it
// const PI = 3.14;
// console.log(PI);

// 13. Declare a variable, reassign it, and print both values
// let a = 25
// console.log(a);
// a = 26
// console.log(a);

// 14. Print the output of `typeof null` and observe what type
// JavaScript reports
// console.log(typeof null); // Output: object

// 15. Create a variable containing a numeric value as a string
// (e.g.`"25"`) and print its type
// let num = "25"
// console.log(typeof num); // Output: string

// 16. Create a boolean variable and print its `typeof`
// let bool = true
// console.log(typeof bool); // Output: boolean

// 17. Create three variables: a string, a number, and a boolean. Print
// all of them together in a formatted output
// let a = "25"
// let b = 25
// let c = true
// console.log(typeof a, typeof b, typeof c);

// 18. Declare a variable without assigning a value and print its type using `typeof`
// let a
// console.log(typeof a); // Output: undefined

// 19. Create a variable with the value `undefined` and print its type
// let a = undefined
// console.log(typeof a); // Output: undefined

// 20. Create an array using `const`, print it, attempt to reassign the entire array 
// (and handle the error), then modify the existing array by adding a new element and
// print the updated array
// const arr = [1, 3, 6, 7]
// console.log(arr);

// try{
//     arr = [1, 3, 6, 7]
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     arr.push(9)
//     console.log(arr);
// }

// Loops
// 21. Write a program that prints the numbers from 1 to 50 using  a `for` loop
// for (let num = 1; num <= 50; num++) {
//     console.log(num);
// }

// 22. Calculate the sum of numbers from 1 to 10 using a `while` loop
// let i = 1
// let sum = 0
// while(i<=10){
//     sum+= i
//     i++
// }
// console.log("Sum of numbers from 1 to 10: " + " " + sum);

// 23. Print each character of "JavaScript" using for...of
// let nm = "JavaScript"
// for(let char of nm){
//     console.log(char);
// }

// 24. Print odd numbers from 1 to 20 using continue
// for(let i=1; i<=20; i++){
//     if(i%2 == 0){
//         continue;
//     }
//     console.log(i);
// }

// 25. Print numbers from 5 to 1 using do...while
// let i = 5
// do{
//     console.log(i);
//     i--
// }while(i>=1)

// 26. Calculate the factorial of 5 using a loop
// let num = 5
// let fact = 1
// for(let i = 1; i<=num; i++){
//     fact *= i
// }
// console.log(fact);

// 27.

// 28. 

// 29. Print numbers between 1-100 divisible by 5
// for(let i = 1; i <= 100; i++){
//     if(i % 5 === 0){ 
//         console.log(i);
//     }
// }

// 30. Print the multiplication table of 7 using a loop
// for(let i = 1; i <= 10; i++){
//     console.log(`7 * ${i} = ${7 * i}`);
// }

// Arrays
// 31. Create an array of movies and print using join("-")
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"]
// let result = arr.join("-")
// console.log(result);

// 32. Print the element at index 1 of an array
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"]
// console.log(arr[1]);

// 33. Add two elements at the beginning using unshift()
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"]
// arr.unshift("Sholay", "Golmaal")
// console.log(arr);

// 34. Remove the last element using pop()
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"]
// arr.pop(arr[4])
// console.log(arr);

// 35. Extract the first three elements using slice()
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"]
// let result = arr.slice(0, 3)
// console.log(result);

// 36. Find the index of number 5 using indexOf()
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"] 
// let result = arr.indexOf("Dangal") 
// console.log(result);

// 37. Check if 3 exists using includes()
// let arr = ["Dilwale", "Josh", "PK", "Pathaan", "Dangal"] 
// let result = arr.includes("Pathaan")
// console.log(result);

// 38. Merge two arrays using concat()
// let arr1 = ["Dilwale", "Josh", "PK"]
// let arr2 = ["Pathaan", "Dangal"]
// let result = arr1.concat(arr2)
// console.log(result);

// 39. Sort an array of numbers in ascending order
// let num = [10, 1, 4, 70, 34]
// num.sort((a, b) => a - b)
// console.log(num);

// 40. Copy an array using spread operator and compare references
// let arr1 = ["Dilwale", "Josh", "PK"]
// let arr2 = [...arr1]
// console.log(arr1 === arr2); // Output: false