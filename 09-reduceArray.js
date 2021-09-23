//The reduce() method reduces an array of values to just one value. The reduce function is run on each element of the array to get the single output value. This method does not reduce the original array.

let num1=[1,2,3,4,5,6,7,8,9];
let num2=num1.reduce(oneValue);

function oneValue(value,index){
    return value+index
}
console.log(num1)
console.log(num2)