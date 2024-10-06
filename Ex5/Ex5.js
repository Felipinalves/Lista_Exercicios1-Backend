function inverterNumero(numero) {
    const numeroString = numero.toString();  // Converte o número para string
    const numeroInvertidoString = numeroString.split('').reverse().join('');  // Inverte a string
    return parseInt(numeroInvertidoString, 10);  // Converte de volta para inteiro
}
