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
		
		// JavaScript para abrir e fechar o modal
	document.addEventListener('DOMContentLoaded', () => {
		const imagens = document.querySelectorAll('.galeria-imagens img');
		const modal = document.getElementById('modal-imagem');
		const modalImg = document.getElementById('imagem-expandida');
		const fechar = document.querySelector('.fechar-modal');

		imagens.forEach(img => {
			img.addEventListener('click', () => {
				modal.style.display = "block";
				modalImg.src = img.src;
			});
		});

		fechar.addEventListener('click', () => {
			modal.style.display = "none";
		});

		modal.addEventListener('click', e => {
			if (e.target === modal) modal.style.display = "none";
		});
	});

	});
