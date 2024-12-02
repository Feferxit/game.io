document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a"); // Links do menu
    const pages = document.querySelectorAll(".page"); // Todas as seções

    // Função para ocultar todas as páginas
    function hideAllPages() {
        pages.forEach(page => page.classList.remove("active"));
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link

            hideAllPages(); // Oculta todas as páginas
            menuLinks.forEach(menu => menu.classList.remove("active")); // Remove "active" de todos os links

            // Ativa a página correspondente e destaca o link
            const targetPage = document.querySelector(link.getAttribute("href"));
            if (targetPage) targetPage.classList.add("active"); // Mostra a página clicada
            link.classList.add("active"); // Adiciona "active" ao link clicado
        });
    });

    // Exibe a página inicial (home) ao carregar
    document.querySelector("#home").classList.add("active");
});
