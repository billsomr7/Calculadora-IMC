var btnCalcular = document.querySelector("#btnCalcular")
var peso = document.querySelector("#peso")
var altura = document.querySelector('#altura')
var res = document.querySelector(".res")



function calcular(event) {

    event.preventDefault()
    var pesoValue = peso.value
    var alturaValue = altura.value

    if (pesoValue.length == 0 || alturaValue.length == 0) {
        alert("Por favor, preencha todos os campos!")
        res.innerHTML = "ERRO"
        return
    }

    var IMC = (pesoValue / Math.pow(alturaValue, 2)).toFixed(2)

    if (IMC < 17) {
        res.innerHTML = `<div class="status">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>

             </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>muito a baixo do peso</p>

             </div>`
    } else if (IMC >= 17 && IMC <= 18.49) {
        res.innerHTML = `<div class="status">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>a baixo do peso</p>
                </div>`
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        res.innerHTML = `<div class="status">
        <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>Normal</p>
                </div>`
    } else if (IMC >= 25 && IMC <= 29.99) {
        res.innerHTML = `<div class="status">
        <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>Acima do peso</p>
                </div>`
    } else if (IMC >= 30 && IMC <= 34.99) {
        res.innerHTML = `<div class="status">
        <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>Obesidade I</p>
                </div>`
    } else if (IMC >= 35 && IMC <= 39.99) {
        res.innerHTML = `<div class="status">
        <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>Obesidade II (Severa)</p>
                </div>`
    } else {
        if (IMC >= 40) {
            res.innerHTML = `<div class="status">
        <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p> 
                </div>
             <div class="parametro">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${IMC}</p>
                <p>Obesidade III (Mórbida)</p>
                </div>`
        }
    }

    peso.value = ""
    altura.value = ""
    btnCalcular.value = "Refazer"

}

btnCalcular.addEventListener('click', calcular)