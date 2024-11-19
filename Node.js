// Клиент талын код (JavaScript)
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Зөвшөөрөл хүсэх
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            console.log('Токен:', data.token);
            localStorage.setItem('authToken', data.token); // Токеныг хадгалах
        } else {
            console.log('Нууц үг буруу эсвэл хэрэглэгч олдсонгүй');
        }
    })
    .catch(error => {
        console.error('Алдаа гарлаа:', error);
    });
});