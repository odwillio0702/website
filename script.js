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
