function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error-message');

  if (user === 'minhadelicia' && pass === '101023') {
    error.textContent = '';

    // Espera a animação terminar antes de redirecionar
    setTimeout(() => {
      window.location.href = 'surpresa.html';
    }, 1500);
  } else {
    error.textContent = 'Usuário ou senha incorretos.';
  }
}

// Geração de corações animados
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  heart.style.bottom = '-20px';
  heart.style.position = 'absolute';


  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
