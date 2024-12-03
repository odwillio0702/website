window.addEventListener('DOMContentLoaded', () => {
    // Анимация кнопок при наведении
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease-in-out";
            link.style.color = "#8e7dff"; // Изменение цвета на фиолетовый
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = "scale(1)";
            link.style.transition = "transform 0.3s ease-in-out";
            link.style.color = "#dcd6f7"; // Восстановление исходного цвета
        });
    });

    // Эффект появления для текста (например, заголовки)
    const headers = document.querySelectorAll('h1, h2');
    headers.forEach(header => {
        header.style.opacity = 0;
        header.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            header.style.opacity = 1;
        }, 200);
    });

    // Плавная прокрутка при клике на навигацию
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Получаем id элемента
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // немного отступаем сверху
                behavior: 'smooth'
            });
        });
    });

    // Плавная анимация кнопки при наведении
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "all 0.3s ease-in-out";
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = "scale(1)";
        });
    });

    // Взаимодействие с кнопками: пример добавления события на кнопку "Обо мне"
    const aboutBtn = document.getElementById('about-btn');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            alert("Больше информации о сайте скоро появится!");
        });
    }

    // Дополнительная анимация для текста в footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.style.opacity = 0;
        footerText.style.transition = "opacity 2s ease-in-out";
        setTimeout(() => {
            footerText.style.opacity = 1;
        }, 1000);
    }
});
