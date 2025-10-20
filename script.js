function EnviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('Nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '55021996312240';

    if (!nome.trim() || !mensagem.trim()) {
        alert("Por favor, preencha os campos de mensagem antes de enviar.")
        return;
    }

    const texto = `Olá! me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank');
}