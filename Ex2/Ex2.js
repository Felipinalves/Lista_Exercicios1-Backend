function repetirMensagem(mensagem, n) {
    if (n <= 0) return '';  // Retorna uma string vazia se N for menor ou igual a 0
    let resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += mensagem;  // Concatena a mensagem N vezes
        if (i < n - 1) resultado += ' ';  // Adiciona um espaço entre as mensagens, exceto após a última
    }
    return resultado;
}
