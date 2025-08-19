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
});