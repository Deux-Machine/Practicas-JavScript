//Recursividad
//Calculo factorial de un numero entero
//Factorial de 5= 5 * 4 * 3 * 2 * 1 = 120

//Funcion NO recusriva -> Tiene un estado interno
function factorial(num) {
    let fact = num
    for (let i = num - 1; i > 0; i = i - 1) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(5))


function factorial_rec(num) {
    if (num === 1) return 1
    return num * factorial_rec(num - 1)
}
console.log(factorial_rec(5))


//Son funciones puras, no mutan en cada llamado
function suma(num1, num2) {
    return num1 + num2
}

function multiplica(num1, num2){
    return num1 * num2
}

function suma_y_multiplica(num1, num2) {
    return suma(num1, num2) * multiplica(num1, num2)
}
console.log(suma(1, 4))
console.log(multiplica(1, 4))
console.log(suma_y_multiplica(1, 4))
