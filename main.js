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
  
  // Inicializa o sistema de partículas
  initParticles();
  
  // Adiciona o contador regressivo
  addCountdown();
  
  // Mostra a carta automaticamente após 8 segundos
  setTimeout(() => {
    showCardWithAnimation();
  }, 8000);
});

// Sistema de partículas
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
  
  // Cria novas partículas periodicamente
  setInterval(() => {
    if (particlesContainer.children.length < particleCount) {
      createParticle(particlesContainer);
    }
  }, 2000);
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Posição aleatória
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 6 + 's';
  particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
  
  // Tamanho aleatório
  const size = Math.random() * 3 + 2;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  // Cor aleatória
  const colors = ['#39c6d6', '#4ecdc4', '#ff6b6b', '#667eea'];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  container.appendChild(particle);
  
  // Remove a partícula após a animação
  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
    }
  }, 8000);
}

// Função para mostrar a carta com animação aprimorada
function showCardWithAnimation() {
  const overlay = document.getElementById('overlay');
  const card = document.getElementById('card');
  const skipButton = document.querySelector('.skip-button');
  const flowers = document.querySelector('.flowers');
  const countdown = document.getElementById('countdown');
  
  if (overlay && card) {
    // Esconde o contador regressivo
    if (countdown) {
      countdown.style.transition = 'all 0.5s ease-out';
      countdown.style.opacity = '0';
      countdown.style.transform = 'scale(0.8)';
      setTimeout(() => {
        countdown.remove();
      }, 500);
    }
    
    // Esconde o botão de pular com fade-out (se existir)
    if (skipButton) {
      skipButton.style.transition = 'all 0.5s ease-out';
      skipButton.style.opacity = '0';
      skipButton.style.transform = 'scale(0.8)';
      skipButton.style.visibility = 'hidden';
    }
    
    // Adiciona efeito de fade-out nas flores com transição suave
    if (flowers) {
      flowers.style.transition = 'all 2s cubic-bezier(0.4, 0, 0.2, 1)';
      flowers.style.opacity = '0.2';
      flowers.style.transform = 'scale(0.9)';
      flowers.style.filter = 'blur(2px)';
    }
    
    // Pausa as animações das flores
    pauseFlowerAnimations();
    
    // Mostra o overlay com fade-in suave e blur
    overlay.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    overlay.classList.add('show');
    // Força visibilidade
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.pointerEvents = 'auto';
    
    // Mostra a carta com animação dramática
    setTimeout(() => {
      card.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      card.classList.add('show');
      // Força visibilidade
      card.style.opacity = '1';
      card.style.transform = 'translate(-50%, -50%) scale(1)';
      card.style.zIndex = '9999';
      
      // Combina entrada + flutuação após entrada
      card.style.animation = 'cardEntrance 0.9s ease-out, float 6s ease-in-out 0.9s infinite';
      
      // Adiciona efeito de brilho
      addCardGlow(card);
    }, 300);
  }
}

// Adiciona efeito de brilho à carta
function addCardGlow(card) {
  card.style.boxShadow = `
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 60px rgba(57, 198, 214, 0.3),
    0 0 100px rgba(57, 198, 214, 0.1)
  `;
  
  // Remove o brilho após a animação
  setTimeout(() => {
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
  }, 2000);
}

// Função para mostrar a carta manualmente (usada pelo botão)
function showCard() {
  showCardWithAnimation();
}

// Função para voltar ao início
function goBack() {
  // Adiciona efeito de fade-out antes de redirecionar
  const card = document.getElementById('card');
  const overlay = document.getElementById('overlay');
  
  if (card && overlay) {
    card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    overlay.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    card.classList.remove('show');
    overlay.classList.remove('show');
    
    // Adiciona efeito de saída
    card.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(5deg)';
    card.style.opacity = '0';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.pointerEvents = 'none';
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  } else {
    window.location.href = 'index.html';
  }
}

// Função para pausar animações das flores
function pauseFlowerAnimations() {
  const flowers = document.querySelector('.flowers');
  if (flowers) {
    flowers.style.animationPlayState = 'paused';
  }
}

// Função para retomar animações das flores
function resumeFlowerAnimations() {
  const flowers = document.querySelector('.flowers');
  if (flowers) {
    flowers.style.animationPlayState = 'running';
  }
}

// Adiciona contador regressivo visual
function addCountdown() {
  const countdown = document.createElement('div');
  countdown.id = 'countdown';
  countdown.innerHTML = `
    <div class="countdown-text">Carta em: <span id="countdown-number">8</span>s</div>
    <div class="countdown-bar"></div>
  `;
  countdown.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
    color: white;
    padding: 1.2rem;
    border-radius: 15px;
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    z-index: 10001;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(countdown);
  
  // Anima a barra de progresso
  const bar = countdown.querySelector('.countdown-bar');
  const number = countdown.querySelector('#countdown-number');
  
  bar.style.cssText = `
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #39c6d6, #4ecdc4);
    border-radius: 3px;
    margin-top: 0.8rem;
    transition: width 0.1s linear;
    box-shadow: 0 2px 10px rgba(57, 198, 214, 0.3);
  `;
  
  let timeLeft = 8;
  const interval = setInterval(() => {
    timeLeft--;
    number.textContent = timeLeft;
    bar.style.width = `${(timeLeft / 8) * 100}%`;
    
    // Efeito de pulso quando restam poucos segundos
    if (timeLeft <= 3) {
      countdown.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        countdown.style.animation = '';
      }, 500);
    }
    
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdown.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      countdown.style.opacity = '0';
      countdown.style.transform = 'scale(0.8) translateY(-20px)';
      setTimeout(() => {
        countdown.remove();
      }, 800);
    }
  }, 1000);
  
  // Efeito hover no contador
  countdown.addEventListener('mouseenter', () => {
    countdown.style.transform = 'scale(1.05)';
    countdown.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
  });
  
  countdown.addEventListener('mouseleave', () => {
    countdown.style.transform = 'scale(1)';
    countdown.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
  });
}

// Funções globais para uso no HTML
window.showCard = showCard;
window.goBack = goBack;
window.pauseFlowerAnimations = pauseFlowerAnimations;
window.resumeFlowerAnimations = resumeFlowerAnimations;