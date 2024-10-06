function validarSequencia(sequencia) {
    const pilha = [];  // Usamos uma pilha para armazenar os caracteres de abertura

    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);  // Adiciona caracteres de abertura na pilha
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0) {
                return false;  // Retorna falso se não há um par correspondente
            }
            const topo = pilha.pop();  // Remove o último caractere de abertura
            if ((char === ')' && topo !== '(') || (char === ']' && topo !== '[')) {
                return false;  // Retorna falso se os pares não correspondem
            }
        }
    }

    return pilha.length === 0;  // Retorna verdadeiro se a pilha estiver vazia (todos os pares foram fechados)
}
