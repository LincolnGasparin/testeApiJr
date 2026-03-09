function dividirNumeros(number1, number2) {
  try {
    if (number2 === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return number1 / number2;
  } catch (error) {
    return "Erro: " + error.message;
  }
}

console.log(dividirNumeros(20, 2));
console.log(dividirNumeros(6, 0));
console.log(dividirNumeros(21, 3));

function inverterPalavra(palavra) {
  return palavra.split("").reverse().join("");
}

console.log(inverterPalavra("javascript"));

function somaImpares(n) {
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
  return soma;
}
console.log(somaImpares(5)); // Saída esperada: 9 (1 + 3 + 5)
console.log(somaImpares(10)); // Saída esperada: 25 (1 + 3 + 5 + 7 + 9)
