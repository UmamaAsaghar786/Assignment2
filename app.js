//Nested Array
let arr1=[1,[2,3],[4,[5,6,7]]]
let arr2=[...arr1];
let arr3=[...arr1[1]]
let arr4=[...arr1[2]]
let arr5=[...arr1[3]]
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
let comp={dell:{corei3:{price:4000},corei5:{price:5000}},Hp:{corei7:{price:6000}}}
let obj={...comp}
let{comp:{Hp:{...remain}}}=comp
console.log(remain)
