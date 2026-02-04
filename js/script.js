document.querySelectorAll(".card").forEach(card => {
    const botao = card.querySelector(".ver-mais");
 
    botao.addEventListener("click", () => {
        card.classList.toggle("ativo");
    });
 
    card.addEventListener("mouseleave", () => {
        card.classList.remove("ativo");
    });
});
 
document.querySelectorAll(".agenda").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const telefone = "5518981775006";

        const card = form.closest(".card");
        const servico = card.querySelector("h3").innerText;

        const data = form.querySelector('input[type="date"]').value;
        const hora = form.querySelector('input[type="time"]').value;

        const mensagem = `
            Olá! Gostaria de agendar um horário 💈

            📌 Serviço: ${servico}
            📅 Data: ${data}
            ⏰ Horário: ${hora}
        `;

        const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

        form.reset();
    });
});
