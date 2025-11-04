document.addEventListener('DOMContentLoaded', () => {
    
    // Плавная прокрутка к якорям
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Обработка формы
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            
            if (emailInput.value) {
                // Имитация отправки
                submitButton.textContent = 'Отправка...';
                setTimeout(() => {
                    submitButton.textContent = 'Заявка принята!';
                    submitButton.style.backgroundColor = '#28a745'; // Зеленый цвет успеха
                    emailInput.value = '';
                }, 1500);

                setTimeout(() => {
                    submitButton.textContent = 'Получить доступ';
                    submitButton.style.backgroundColor = ''; // Возвращаем исходный цвет
                }, 4000);
            }
        });
    }

});
