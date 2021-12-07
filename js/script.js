function sum(num = 0) {
    return function (doubleNum) {
        return num += doubleNum;
    };
}
const calc = sum();
console.log(calc(3));
console.log(calc(5));
console.log(calc(20));

