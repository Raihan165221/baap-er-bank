document.getElementById('login-btn').addEventListener('click', function (e) {
    const emailId = document.getElementById('email');
    const emailValue = emailId.value;
    const passwordId = document.getElementById('password');
    const passwordValue = passwordId.value;
    if (emailValue === 'raihan@gmail.com' && passwordValue === 'raihan') {
        window.location.href = '../bank.html';
        console.log('hllo')
    }

    e.preventDefault();
})