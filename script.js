const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    // Rules
    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++; // Check for Uppercase
    if (/[0-9]/.test(val)) strength++; // Check for Number
    if (/[^A-Za-z0-9]/.test(val)) strength++; // Check for Special Character

    // Update UI
    strengthMeter.className = ''; 
    
    if (val.length === 0) {
        feedback.innerText = '';
    } else if (strength < 2) {
        strengthMeter.classList.add('weak');
        feedback.innerText = 'Weak';
    } else if (strength === 2 || strength === 3) {
        strengthMeter.classList.add('medium');
        feedback.innerText = 'Medium';
    } else {
        strengthMeter.classList.add('strong');
        feedback.innerText = 'Strong';
    }
});