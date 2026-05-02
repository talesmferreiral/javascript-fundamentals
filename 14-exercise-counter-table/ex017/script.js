function gerar() {
    var num = document.getElementById('numero')
    var n = Number(num.value)

    if (num.value === "" || n === 0) {
        alert("Digite um número diferente de 0")
        return
    }

    tab0.innerHTML = `${n} x 1 = ${n * 1}`
    tab1.innerHTML = `${n} x 2 = ${n * 2}`
    tab2.innerHTML = `${n} x 3 = ${n * 3}`
    tab3.innerHTML = `${n} x 4 = ${n * 4}`
    tab4.innerHTML = `${n} x 5 = ${n * 5}`
    tab5.innerHTML = `${n} x 6 = ${n * 6}`
    tab6.innerHTML = `${n} x 7 = ${n * 7}`
    tab7.innerHTML = `${n} x 8 = ${n * 8}`
    tab8.innerHTML = `${n} x 9 = ${n * 9}`
    tab9.innerHTML = `${n} x 10 = ${n * 10}`
}