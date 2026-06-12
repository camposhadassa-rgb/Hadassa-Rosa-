// Mensagem de boas-vindas
window.addEventListener("load", () => {
    alert("Bem-vindo ao Agroturismo Paraná! Explore destinos e experiências rurais.");
});

// Mostrar informações ao clicar nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const info = card.getAttribute("data-info");
        alert(info);
    });
});

// Formulário de contato
const form = document.getElementById("contato-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Obrigado por entrar em contato! Responderemos em breve.");
    form.reset();
});
