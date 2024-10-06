function gerarListaAleatoria(tamanho) {
    const nomes = ['Alice', 'Bruno', 'Carla', 'Diego', 'Eduarda', 'Felipe', 'Gabriela', 'Henrique', 'Isabela', 'João'];
    const lista = [];

    for (let i = 0; i < tamanho; i++) {
        const id = i + 1;  // Atribui um ID sequencial
        const nome = nomes[Math.floor(Math.random() * nomes.length)];  // Seleciona um nome aleatório
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;  // Gera uma idade entre 18 e 90 anos

        lista.push({ id, nome, idade });  // Adiciona o objeto à lista
    }

    return lista;  // Retorna a lista de objetos
}
