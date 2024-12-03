window.addEventListener('DOMContentLoaded', () => {
    // Анимация кнопок при наведении
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease-in-out";
            link.style.color = "#8e7dff"; // Фиолетовый цвет при наведении
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = "scale(1)";
            link.style.transition = "transform 0.3s ease-in-out";
            link.style.color = "#dcd6f7"; // Восстановление исходного цвета
        });
    });

    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Получаем id элемента
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
