function contar() {
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] Faltam dados!');
    return;
  }

  const i = Number(inicio.value);
  const f = Number(fim.value);
  let p = Number(passo.value);

  if (isNaN(i) || isNaN(f) || isNaN(p)) {
    alert('[ERRO] Valores inválidos!');
    return;
  }

  if (p === 0) {
    alert('[ERRO] Passo não pode ser zero!');
    return;
  }

  p = Math.abs(p); // usar valor absoluto do passo
  res.innerHTML = 'Contando: <br>';

  if (i <= f) {
    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F449} `;
    }
  } else {
    for (let c = i; c >= f; c -= p) {
      res.innerHTML += `${c} \u{1F449} `;
    }
  }

  res.innerHTML += '\u{1F3C1}';
}