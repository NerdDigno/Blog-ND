// Arquivo JavaScript simples para funcionalidades básicas do site

// Função para destacar o item de menu atual
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o caminho da página atual
    const currentPage = window.location.pathname.split('/').pop();
    
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    // Verifica cada link e adiciona a classe 'active' ao link da página atual
    menuLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage.startsWith('post-') && linkHref.includes(currentPage.split('-')[1]))) {
            link.classList.add('active');
        }
    });
    
    // Adiciona efeito de hover nos cards de post
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
