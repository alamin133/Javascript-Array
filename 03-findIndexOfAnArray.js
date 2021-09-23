
//find index of an array

let tennis=['federar','nadal','djokovic'];

let indexOf=tennis.indexOf('nadal');
console.log(indexOf)

//remove item from index position

let removedItem=tennis.splice(indexOf, 1)
console.log(removedItem)

//

let countries=['bangladesh', 'india','pakistan','china','japan'];
console.log(countries)

var pos=1;var n=3;

let removedItems=countries.splice(pos,n);
console.log(countries)
console.log(removedItems)

let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
