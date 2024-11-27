document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a"); // Links do menu
    const pages = document.querySelectorAll(".page"); // Todas as seções

    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove "active" de todas as páginas e links
            pages.forEach(page => page.classList.remove("active"));
            menuLinks.forEach(menu => menu.classList.remove("active"));

            // Ativa a página e o link clicado
            const targetPage = document.querySelector(link.getAttribute("href"));
            targetPage.classList.add("active");
            link.classList.add("active");
        });
    });
});
