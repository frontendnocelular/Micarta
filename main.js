// Inicialização da página de flores
document.addEventListener('DOMContentLoaded', () => {
  // Remove a classe container para iniciar as animações
  document.body.classList.remove("container");
  
  // Adiciona efeito de fade-in para as flores
  const flowers = document.querySelector('.flowers');
  if (flowers) {
    flowers.style.opacity = '0';
    flowers.style.transition = 'opacity 2s ease-in-out';
    
    setTimeout(() => {
      flowers.style.opacity = '1';
    }, 500);
  }
  
  // Mostra a carta automaticamente após 8 segundos
  setTimeout(() => {
    showCard();
  }, 8000);
});

// Função para mostrar a carta
function showCard() {
  const overlay = document.getElementById('overlay');
  const card = document.getElementById('card');
  const skipButton = document.querySelector('.skip-button');
  
  if (overlay && card && skipButton) {
    // Esconde o botão de pular
    skipButton.style.opacity = '0';
    skipButton.style.visibility = 'hidden';
    
    // Mostra o overlay
    overlay.classList.add('show');
    
    // Mostra a carta com delay para efeito dramático
    setTimeout(() => {
      card.classList.add('show');
    }, 300);
  }
}

// Função para voltar ao início
function goBack() {
  window.location.href = 'index.html';
}

// Função para mostrar a carta manualmente (usada pelo botão)
window.showCard = showCard;
window.goBack = goBack;