const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');

function check() {
    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()
    submitButton.disabled = !(username && password)
}

usernameInput.addEventListener('input' , check)
passwordInput.addEventListener('input' , check)

togglePassword.addEventListener('click', ()=>{
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.textContent = '🙈'

 }
})