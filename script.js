function validateForm(event) {
    event.preventDefault();

    // Hide all errors and success initially
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Age
    if (age === '' || isNaN(age) || age < 1 || age > 100) {
        document.getElementById('ageError').style.display = 'block';
        isValid = false;
    }

    // Validate Phone (allow +country code and 10–15 digits)
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // If valid, show success and reset form after 3s
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('registrationForm').reset();
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }

    return isValid;
}
