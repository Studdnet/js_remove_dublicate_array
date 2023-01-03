const array = ['Alex', 'Nina', 'Nick', 'Nina', 'Melisa', 'Nina', 'John']; 

//1. Using method new set(array) to delete all duplicates from array; 

const setArray1 = [... new Set(array)];

// another way to use new Set (array); 

const setArray11 = Array.from(new Set(array));

console.log(setArray1);
console.log(setArray11);

//2. Using filter and indexOf; 

let debug = [];
const filterArray = array.filter((item, index) => {
	debug.push({item, index, indexOf:array.indexOf(item)});
	return index === array.indexOf(item);
});

console.log(filterArray);
console.table(debug);


// Using method reduce(); 

const reduceArray = array.reduce((uniq, item) => {
	return uniq.includes(item) ? uniq : [... uniq, item]; 
}, []); 

console.log(reduceArray);



