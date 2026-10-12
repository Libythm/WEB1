
function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let res = document.getElementById("resultado");

    res.innerHTML = "Soma: " + (n1 + n2); 
    res.innerHTML +=  "<br>" + "Subtração: " + (n1 - n2);
    res.innerHTML +=  "<br>" + "Divisão: " + (n1 / n2);
    res.innerHTML +=  "<br>" + "Multiplicação: " + (n1 * n2);
    res.innerHTML +=  "<br>" + "Potência: " + (n1 ** n2);
    res.innerHTML +=  "<br>" + "Resto da Divisão: " + (n1 % n2);
}
