function calcular(valor1, valor2, operacao) {
    switch (operacao) {
        case 'adição':
            return valor1 + valor2;
        case 'subtração':
            return valor1 - valor2;
        case 'multiplicação':
            return valor1 * valor2;
        case 'divisão':
            if (valor2 === 0) return null;  // Previne a divisão por 0
            return valor1 / valor2;
        default:
            return null;  // Retorna nulo para operações inválidas
    }
}
