
document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("gerarKit");

    botao.addEventListener("click", () => {

        const empresa = document.getElementById("empresa").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!empresa || !telefone || !mensagem) {
            alert("Preencha todos os campos.");
            return;
        }

        alert("Tudo certo! Agora vamos gerar o Kit.");

    });

});
