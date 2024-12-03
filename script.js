// Простая анимация для появления элементов при прокрутке страницы

// Функция для проверки, виден ли элемент на экране
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления анимации
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate'); // Находим все элементы с классом .animate
    elements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('fade-in'); // Добавляем класс для анимации
        }
    });
}

// Слушаем событие прокрутки
window.addEventListener('scroll', animateOnScroll);

// Инициализация анимации при загрузке страницы
window.addEventListener('load', animateOnScroll);
