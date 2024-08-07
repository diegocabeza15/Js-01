/* Par o Impar */

function ParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

/* Mayor-Menor */

function MayorMenor (num1, num2) {
    if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que " + num2);
    } else 
    
    if (num1 < num2) {
        console.log("El número " + num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales.");
    }
}

/* Multiplo de 5 */

function MultiploCinco (numero) {
    if (numero % 5 === 0) {
        console.log("El número " + numero + " es múltiplo de 5.");
    } else {
        console.log("El número " + numero + " no es múltiplo de 5.");
    }
}

/* Imprimir hasta x Numero */

function ImprimirHastaNum (numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

/* Imprimir x veces una palabra */

function repetirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}
//Nota: palabra entre comillas.

/* Imprime Array */

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/* Array sin Cinco */

function ImpArraySinQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { 
            console.log(array[i]);
        }
    }
}

/* ArrayMultiplicadora */

function ArrayMultiplicadora (array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * multiplicador);
    }
}





