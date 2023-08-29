function soma(){
    let inputN1 = document.getElementById("firstNumber").value
    let inputN2 = document.getElementById("secondNumber").value

    var n1 = parseInt(inputN1)
    var n2 = parseInt(inputN2)

    let somatoria = n1+n2

    document.getElementById("output").innerHTML = "<h1>O resultado da soma é de"+somatoria+" </h1>"
}

function sub() {}