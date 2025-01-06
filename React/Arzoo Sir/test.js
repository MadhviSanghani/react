// console.log("Hii from test JS");

var arr = [1, 5, 6];
const multiply = (arr) => {
    return arr.map((e) => (e%2 == 0 ? e*2 : e*3));
};
// console.log(multiply(arr));

const evenArr = (arr) => arr.filter((e) => e%2 == 0 )
console.log(evenArr(arr));