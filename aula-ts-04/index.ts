function multiply(num1:number, num2:number):number {
    return num1 * num2;
}

function sum(num1:number | string, num2: number | string):number|string {
    if (typeof(num1) === "string" || typeof(num2) === "string"){
        num1 = Number(num1)
        num2 = Number(num2)
        if (!num1 || !num2){
            return (`Não é possível executar a função sum, pois num1 ou num2 não pode ser convertido a número!`)
        }
    }
    return num1 + num2;
}

function isEven(num:number):boolean {
    return num % 2 === 0;
}

function showResult(result:number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = '5d';//prompt("First Number");
    const num2 = 7;//prompt("Second Number");
    
    let result = sum(num1,num2);
    if (typeof(result)==="string") {
        console.log(result);
        return};
    result += multiply(1,2);
    showResult(result);
})();


/* console.log(sum('12x','2')) */