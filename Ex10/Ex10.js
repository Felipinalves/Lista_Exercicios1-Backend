function ordenarPorAtributo(lista, atributo) {
    if (!lista.length) return [];  // Retorna uma lista vazia se a lista estiver vazia

    // Verifica se o atributo é válido
    if (['id', 'nome', 'idade'].includes(atributo)) {
        return lista.sort((a, b) => {
            if (atributo === 'nome') {
                return a[atributo].localeCompare(b[atributo]);  // Ordena alfabeticamente por nome
            }
            return a[atributo] - b[atributo];  // Ordena numericamente por id ou idade
        });
    }

    return lista;  // Retorna a lista original se o atributo não for válido
}
