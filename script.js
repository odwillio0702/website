// Анимация кнопок при наведении
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Можно добавить дополнительные анимации или функциональность
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт загружен и готов к использованию!');
});
