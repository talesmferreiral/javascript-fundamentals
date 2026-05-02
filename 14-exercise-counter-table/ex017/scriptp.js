function gerar() {
    var num = document.getElementById('numero')
    var n = Number(num.value)

    if (num.value === "" || n === 0) {
        alert("Digite um número diferente de 0")
        return
    } for (var i = 1; i <= 10; i++) {
        document.getElementById(`tab${i-1}`).innerHTML =
        `${n} x ${i} = ${n * i}`
    }
}