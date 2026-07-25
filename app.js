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

        // Remove tudo que não é número
        const numero = telefone.replace(/\D/g, "");

        // Cria o link oficial do WhatsApp
        const linkWhatsApp =
            "https://wa.me/" + numero +
            "?text=" + encodeURIComponent(mensagem);

        // Guarda os dados para as próximas etapas
        window.kitQRZAP = {
            empresa,
            numero,
            mensagem,
            linkWhatsApp
        };
const preview = document.getElementById("previewQR");

preview.innerHTML =
"<div style='padding:20px;text-align:center;font-weight:bold;color:#5b21b6;'>" +
"QR pronto para ser gerado" +
"</div>";
        console.log(window.kitQRZAP);

        alert("Kit preparado com sucesso!");

    });

});
