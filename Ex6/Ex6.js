function contarVogais(string) {
    const vogais = 'aeiouAEIOU';  // Lista de vogais maiúsculas e minúsculas
    let contador = 0;

    for (let char of string) {
        if (vogais.includes(char)) {  // Verifica se o caractere é uma vogal
            contador++;  // Incrementa o contador
        }
    }

    return contador;  // Retorna o total de vogais
}
