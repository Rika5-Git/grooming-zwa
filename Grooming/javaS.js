
 
const galleryButton = document.getElementById('Gallery');
galleryButton.addEventListener('click', () => {
    window.location.href = 'gallery.html';
});

const serviceButton = document.getElementById('Service');
serviceButton.addEventListener('click', () => {
    window.location.href = 'service.html';
});

const priceButton = document.getElementById('Price');
priceButton.addEventListener('click', () => {
    window.location.href = 'price.html';
});

const reviewButton = document.getElementById('Reviews');
reviewButton.addEventListener('click', () => {
    window.location.href = 'review.html';
});

const aboutButton = document.getElementById('About');
aboutButton.addEventListener('click', () => {
    window.location.href = 'about.html';
});

const homeButton = document.getElementById('Home');
homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const logButton = document.getElementById('Log');
logButton.addEventListener('click', () => {
    window.location.href = 'Log.html';
});

/*const regButton = document.getElementById('Reg');
regButton.addEventListener('click', () => {
    window.location.href = 'Register.html';
});*/





document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение формы

        // Сбрасываем старые ошибки
        emailError.textContent = '';
        passwordError.textContent = '';

        // Получаем значения полей
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Проверяем email
        if (!validateEmail(email)) {
            emailError.textContent = 'Enter a valid email';
            return; // Прерываем выполнение, если email некорректен
        }

        // Проверяем пароль
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            return; // Прерываем выполнение, если пароль слишком короткий
        }

        // Отправляем данные на сервер
        fetch('https://zwa.toad.cz/~xklima/vypisform.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Отправляем данные в формате JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((data) => {
                alert('Successful entry!');
                console.log('Server response:', data);
            })
            .catch((error) => {
                console.error('Sending error:', error);
                alert('Couldnt get in. Try again.');
            });
    });

    // Функция для проверки email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.getElementById('avatarInput');
    const userAvatar = document.getElementById('userAvatar');
    const avatarPlaceholder = document.getElementById('avatarPlaceholder');

    avatarInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Устанавливаем аватар
                userAvatar.src = e.target.result;
                userAvatar.classList.remove('hidden');
                avatarPlaceholder.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
});


















