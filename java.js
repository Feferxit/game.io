document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");
    const sections = document.querySelectorAll(".section");

    // Função para trocar de seção e link ativo
    function changeSection(link) {
        // Remove a classe 'active' de todos os links
        menuLinks.forEach(link => link.classList.remove("active"));

        // Adiciona a classe 'active' ao link clicado
        link.classList.add("active");

        // Oculta todas as seções
        sections.forEach(section => section.classList.remove("active"));

        // Mostra a seção correspondente ao link
        const targetSection = document.querySelector(`#${link.id.split("-")[1]}`);
        targetSection.classList.add("active");
    }

    menuLinks.forEach(link => {
        // Evento de clique para troca de seções
        link.addEventListener("click", (e) => {
            e.preventDefault();
            changeSection(link);
        });
    });
});
