// const doSomethingCool = (num, obj) => {
//     num = 1500;
//     obj.value = 2500;
// };

// const a = 1000;
// const b = { value: 2000 };
// doSomethingCool(a, b);
// console.log(a + b.value);

const doSomethingGreat = (obj, arr) => {
    obj.value = 3500;
    arr.push(obj.value);
}

const a = { value: 1500 };
const b = [1000];
b.push(a.value);
doSomethingGreat(a, b); // [1000, 1500] - push them hay chuyen 1500 -> 3500
console.log(b);