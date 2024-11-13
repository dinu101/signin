document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';
    alert('Sign In Successful!');
    // Perform sign-in logic here
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('registerErrorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';
    alert('Account Created Successfully!');
    // Perform account creation logic here
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    const errorMessage = document.getElementById('resetErrorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';
    alert('Password Reset Email Sent!');
    // Perform password reset logic here
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.


    document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
    
        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }
    
        errorMessage.style.display = 'none';
        successMessage.textContent = 'A password reset link has been sent to your email address.';
        successMessage.style.display = 'block';
    
        // Perform forgot password logic here
    });
    
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    document.getElementById('createAccountForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
    
        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }
    
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }
    
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }
    
        errorMessage.style.display = 'none';
        successMessage.textContent = 'Account created successfully!';
        successMessage.style.display = 'block';
    
        // Perform account creation logic here
    });
    
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
    