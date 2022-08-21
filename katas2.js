// comece a criar a sua função add na linha abaixo
function add(a,b) {
    return a + b
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b) {
let resultado = 0   
    for (let i = 0; i < a; i++) {
        resultado = add(b,resultado)
    }
return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b) {
let resultado = a
    for (let i = 1; i < b; i++) {
        resultado = multiply(resultado,a)
    }
    return resultado    
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(x) {
    let resultado2 = x
    for (let i = 1; i < x; i++){
        resultado2 = multiply(resultado2,i)       
    }
    return resultado2
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    resultado = [0,1]
    for (let i = 1; i <= n; i++) {
        resultado.push(add(resultado[i],resultado[i-1]))
    }
    return resultado[n]
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
