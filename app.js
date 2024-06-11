#! /usr6/bin/env
//                        "Method of an array"
// 1) pop (REMOVES THE LAST ELEMENT)
let Test = ['Affan', 'Hamza'];
Test.pop();
console.log(Test);
// 2) Push (ADDS ELEMENT TO THE END)
Test.push("Manahil");
console.log(Test);
// 3) unshift (ADDS ELEMENT TO THE START)
Test.unshift("Hannan");
console.log(Test);
// 4) shift (REMOVES THE FIRST ELEMENT)
console.log(Test.shift());
console.log(Test);
// 5) slice (ARRAY COPY KARNA)
console.log(Test.slice().reverse());
console.log(Test);
// 6) splice ()
let person = ['Affan', 'Hamza'];
Test.splice(2, 0, "Ali");
console.log(person);
// 7) lenght (ARRAY KA ANDAR KITNA "NUMBER OF ELEMENTS HAIN")
console.log(Test.length);
export {};
