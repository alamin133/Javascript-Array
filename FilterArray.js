//The filter() method takes each element from an array and applies a conditional statement against it. If this condition is true, the element gets pushed to the output array. If the condition is false, the element does not get pushed to the output array. 

let numbers=[1,2,3,4,5,6,7,8,9];

let number1=numbers.filter(checking);

function checking(val){
    return val>7;
}
console.log(number1)

let number2=number1.filter(againChecking);

function againChecking(value){
    return value>=9
}
console.log(number2)