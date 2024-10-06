function calcularMediaIdades(lista) {
    if (lista.length === 0) return 0;  // Retorna 0 se a lista estiver vazia

    const somaIdades = lista.reduce((soma, pessoa) => soma + pessoa.idade, 0);  // Soma as idades
    return somaIdades / lista.length;  // Retorna a média das idades
}
