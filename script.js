// Скрипт для анимации кнопок (увеличение при наведении)
const buttons = document.querySelectorAll('a');  // Находим все ссылки (кнопки)

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.transition = 'transform 0.3s ease';
    });
});

// Скрипт для плавной прокрутки к разделам
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Останавливаем стандартное поведение ссылки
        const targetId = link.getAttribute('href').slice(1); // Получаем id из ссылки

        const targetElement = document.getElementById(targetId); // Находим элемент по id
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Сдвигаем немного вверх
            behavior: 'smooth', // Плавная прокрутка
        });
    });
});

// Звезды на экране
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.appendChild(starsContainer);

// Функция для создания случайных звезд
function createStars() {
  const starCount = 100; // Количество звезд
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Позиционируем звезды случайным образом
    const size = Math.random() * 3 + 1; // Размер звезды
    const positionX = Math.random() * window.innerWidth;
    const positionY = Math.random() * window.innerHeight;
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${positionY}px`;
    star.style.left = `${positionX}px`;
    star.style.animationDuration = `${Math.random() * 1 + 1}s`;
    
    starsContainer.appendChild(star);
  }
}

// Создаем звезды при загрузке страницы
createStars();
