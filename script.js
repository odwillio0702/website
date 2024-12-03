// Функция для плавного появления элементов при прокрутке страницы
const fadeInOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in'); // Ищем все элементы с классом "fade-in"
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        // Если элемент находится в пределах видимости окна
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible'); // Добавляем класс "visible" для анимации
        }
    });
};

// Функция для плавного изменения фона на основе времени суток
function changeBackgroundBasedOnTime() {
    const body = document.querySelector('body');
    const hour = new Date().getHours(); // Получаем текущий час

    // Устанавливаем плавный переход для фона
    body.style.transition = 'background-color 1s ease-in-out';

    // Меняем фон в зависимости от времени суток
    if (hour >= 6 && hour < 12) {
        // Утро — светлый фон
        body.style.backgroundColor = '#2d3a4f'; // Утренний темный синий
    } else if (hour >= 12 && hour < 18) {
        // День — теплые оттенки
        body.style.backgroundColor = '#4b5361'; // Дневной холодный серо-синий
    } else {
        // Ночь — темный фон
        body.style.backgroundColor = '#1a1e2b'; // Ночной темный фон
    }
}

// Анимация для кнопок с эффектом нажатия
const buttonHoverEffects = () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease-in-out';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
};

// Запуск всех эффектов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll(); // Плавное появление элементов при прокрутке
    changeBackgroundBasedOnTime(); // Изменение фона в зависимости от времени суток
    buttonHoverEffects(); // Эффекты для кнопок
});

// Добавляем обработчик для события прокрутки, чтобы анимация срабатывала при прокрутке страницы
window.addEventListener('scroll', fadeInOnScroll);
// Сценарий для добавления анимации появления элементов на странице
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

