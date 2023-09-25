document.getElementById('signup-button').addEventListener('click', function() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (firstname === '' || lastname === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert('Form submitted successfully');
        document.getElementById('registration-form').reset();
    }
});