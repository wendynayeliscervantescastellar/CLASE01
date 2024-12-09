function realizaroperacion (operacion) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // validar entrada de números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "por favor, ingrese números válidos.";
        return;
}

let resultado;
if (operacion === "suma") {
    resultado = num1 + num2;
} else if (operacion === "resta") {
    resultado = num1 - num2;
} else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
} else if (operacion === "division") {
    if (num2 === 0) {
        resultado = "error: no se puede dividir entre cero.";
    } else {  
    resultado = num1 / num2;
    }
} else {
    resultado = "error operacion no válida";
}

// mostrar resultado 
document.getElementById("result").innerText = "resultado: " + resultado;
}