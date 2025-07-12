
function cliqueAqui() {
    const filmes = ["Massacre da serra elétrica", "Sexta Feira 13", "Pânico na Floresta", "Rua do medo"]
    let mensagem = document.getElementById("mensagem")
    const indiceAleatorio = Math.floor(Math.random() * filmes.length);
    mensagem.textContent = filmes[indiceAleatorio];
}