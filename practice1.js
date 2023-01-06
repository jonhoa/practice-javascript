// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function selectEvenItems(strings) {
//   var index = 0;
//   var result = [];
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index ++;
//   });
//   return result;
 
  
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function arrNumber(numbers) {
//   numbers.forEach(function(max) {
//     var i = 0;
//     if (max > numbers[i] ) {
//       console.log(max);
//     } 
//     i ++;
//   }); 
    
//  return numbers;
// }

// console.log(arrNumber([5,4,8,1,2]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = 1;
//   while (number > 0) {
//     product = product * number;
//     number = number - 1;
//   }
//   return product;
// }
// console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// function descending(numbers) {
//   var result = [];
//   var i = 0;
//   var j = 0;
//   var last = numbers.length - 1;
//     while (i < numbers.length) {
//       numbers.forEach(function(min) {
//       if (numbers[j] > min) {
//         if (min.last < [j] ) {
//          console.log(j);
//         }
//         result.push(last);
//         i ++;
//       }
//       console.log("Number j is " + numbers[j]);
//       console.log("Number min  " + min);
//   });
//   j++;
//   i ++;
// }
//   return result;
// }
// console.log(descending([1, 3, 5, 7]));

setTimeout(function() {
  console.log('First task done!');
}, 2000);
setTimeout(function() {
  console.log('Second task done!');
}, 4000);
setTimeout(function() {
  console.log('Third task done!');
}, 6000);

