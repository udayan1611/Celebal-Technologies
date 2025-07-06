const myColor = ["Red", "Green", "White", "Black"];

function joinWithComma(arr) {
  return arr.join(',');
}

function joinWithPlus(arr) {
  return arr.join('+');
}

console.log(joinWithComma(myColor));  
console.log(joinWithComma(myColor));  
console.log(joinWithPlus(myColor));   


const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function countOccurrences(arr, val) {
  return arr.filter(el => el === val).length;
}

const countA = countOccurrences(arr1, 'a');
console.log(`a ( ${countA} times )`);  



function truncateString(str, n) {
  return str.slice(0, n);
}

console.log(truncateString("Robin Singh", 4));  



function capitalizeWords(s) {
  return s
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

console.log(capitalizeWords('js string exercises'));  

