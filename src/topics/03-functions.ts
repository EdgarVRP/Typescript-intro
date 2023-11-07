function addNumbers(a: number, b: number): number {
    return a + b;
}
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}
function multiply(firstNumber:number,secondNumber?:number,base:number=2):number{
    return firstNumber*base;
}

// const sum = addNumbers(2, 3);
// const sumArrow = addNumbersArrow(2, 3);
// const multiplyResult = multiply(5);

// console.log({sum, sumArrow, multiplyResult});


export {};