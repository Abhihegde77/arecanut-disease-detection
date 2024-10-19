// signin-script.js
document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin-form');

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would typically send a request to your server to authenticate the user
        // For this example, we'll just log the values and show an alert
        console.log('Email:', email);
        console.log('Password:', password);

        alert('Sign in successful!');
        // Redirect to the main page or dashboard after successful sign-in
        // window.location.href = 'index.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const leftSideImage = document.getElementById('leftSideImage');

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                leftSideImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});