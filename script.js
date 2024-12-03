// Генерация случайных звёзд
window.onload = function() {
    let numStars = 150; // Количество звёзд
    let container = document.querySelector('body');
  
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      container.appendChild(star);
    }
  }
  