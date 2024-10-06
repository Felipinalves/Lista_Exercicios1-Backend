function fatorial(n) {
    if (n < 0) return undefined;  // O fatorial não é definido para números negativos
    if (n === 0 || n === 1) return 1;  // O fatorial de 0 e 1 é 1
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

