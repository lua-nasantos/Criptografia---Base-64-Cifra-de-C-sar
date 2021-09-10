let mensagem = document.getElementById("mensagem").value
let incremento = parseInt(document.getElementById("incremento").value)
let botao = document.querySelector("button")

botao.onclick = function(){
    
}

// motor para Cifra de César
function cifrado() {
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []

    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            let teste = ((mensagemArr[i].charCodeAt()) - 65 + incremento) % 26
            codificadorArr.push(teste + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            let teste = ((mensagemArr[i].charCodeAt()) - 97 + incremento) % 26
            codificadorArr.push(teste + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}
function decifrado() {
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []

    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            let teste = ((mensagemArr[i].charCodeAt()) - 65 - incremento) % 26
            codificadorArr.push((teste < 0 ? teste + 26 : teste) + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            let teste = ((mensagemArr[i].charCodeAt()) - 97 - incremento) % 26
            codificadorArr.push((teste < 0 ? teste + 26 : teste) + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}

// motor para utilizar base64

function codificador() {
    let mensagemCodificada = btoa(mensagem)

    return mensagemCodificada

}

function decodificado() {
    let mensagemCodificada = atob(mensagem)

    return mensagemCodificada

}
