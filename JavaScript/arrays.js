let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);

let person=[{name:"John",age:25,city:"New York",dept:"CSE"},{name:"Jane",age:22,city:"Chicago",dept:"ECE"}];
console.log(person);
console.log(person[1].name);

person[1].dept="EEE";

console.log(person);