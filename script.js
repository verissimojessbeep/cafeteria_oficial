document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');
    const navLinks = document.querySelectorAll('.category-nav a');

    // Função para alterar o link ativo no menu ao rolar a página
    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Verifica se a seção está visível na tela considerando a altura do menu fixo
            if (window.scrollY >= sectionTop - 120) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});