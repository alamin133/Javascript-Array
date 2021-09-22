//create new array from existing one by applying function

let numbers=[2,4,7,9,3,20];

let num2=numbers.map(triple);

function triple(value){
    return value *3;
    

}

console.log(num2)

let num3=num2.map(double);

function double(value){
    return value-1;
}
console.log(num3)