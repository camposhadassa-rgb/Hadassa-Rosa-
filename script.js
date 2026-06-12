
// Mensagem de boas-vindas
window.addEventListener("load", () => {
    alert("Bem-vindo ao Agroturismo Paraná! Explore destinos e experiências rurais.");
});

// Mostra informações dos destinos ao clicar
const destinos = document.querySelectorAll("#destinos-list li");

destinos.forEach(destino => {
    destino.addEventListener("click", () => {
        const info = destino.getAttribute("data-info");
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
