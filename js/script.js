// Aguarda o DOM ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuOverlay = document.getElementById('menu-overlay');

    // --- Início: Seu código existente para o Menu Hamburger ---
    // Listener para o clique no ícone do menu
    if (menuIcon && menuOverlay) { // Adicionado verificação para garantir que os elementos existem
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('open'); // Alterna a classe 'open' para animar o ícone
            menuOverlay.classList.toggle('show'); // Alterna a classe 'show' para exibir/ocultar o menu
        });

        // Opcional: Fechar o menu ao clicar fora dele (no overlay escuro)
        menuOverlay.addEventListener('click', (event) => {
            if (event.target === menuOverlay) { // Verifica se o clique foi no overlay, não nos links
                menuIcon.classList.remove('open');
                menuOverlay.classList.remove('show');
            }
        });

        // Opcional: Fechar o menu ao clicar em um link (para navegação SPA)
        const menuLinks = menuOverlay.querySelectorAll('nav ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('open');
                menuOverlay.classList.remove('show');
            });
        });
    }
    // --- Fim: Seu código existente para o Menu Hamburger ---


    // --- Início: Nova lógica para ajustar a margem superior do body ---
    const topBar = document.querySelector('.top-bar'); // Seleciona a top-bar
    const body = document.body; // Seleciona o body

    function adjustBodyMargin() {
        if (topBar) { // Verifica se a topBar existe antes de tentar obter sua altura
            const topBarHeight = topBar.offsetHeight; // Obtém a altura real da top-bar
            body.style.marginTop = (topBarHeight + 10) + 'px'; // Aplica a margem + 10px de respiro
        }
    }

    // Chama a função ao carregar a página (quando o DOM está pronto)
    adjustBodyMargin();

    // Chama a função se a janela for redimensionada (útil para responsividade)
    window.addEventListener('resize', adjustBodyMargin);

    // Opcional: Chama a função um pouco depois, caso a imagem do banner demore a carregar
    // Use 'load' para garantir que todas as imagens (incluindo o banner) estejam carregadas
    window.addEventListener('load', adjustBodyMargin);
    // --- Fim: Nova lógica para ajustar a margem superior do body ---

});
