function tabuada(numero) {
    const resultado = [];
    for (let i = 1; i <= 10; i++) {
        resultado[i - 1] = numero * i;  // Armazena o resultado da multiplicação no vetor
    }
    return resultado;
}
