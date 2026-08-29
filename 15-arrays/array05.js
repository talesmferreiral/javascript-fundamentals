// Percorrendo o array com for e somando os valores

let valores = [4, 8, 15, 16, 23, 42]
let soma = 0

for (let i = 0; i < valores.length; i++) {
    soma += valores[i]
}

console.log(`A soma dos valores é ${soma}`)