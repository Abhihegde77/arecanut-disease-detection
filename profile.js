document.addEventListener('DOMContentLoaded', () => {
    const profilePictureInput = document.getElementById('profile-picture-input');
    const profilePicture = document.getElementById('profile-picture');
    const userInfoForm = document.getElementById('user-info-form');

    profilePictureInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
                // Here you would typically upload the image to your server
                // and update the user's profile in the database
            };
            reader.readAsDataURL(file);
        }
    });

    userInfoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(userInfoForm);
        const userData = Object.fromEntries(formData.entries());
        
        // Here you would typically send the updated user data to your server
        // and update the user's profile in the database
        console.log('Updated user data:', userData);
        alert('Profile updated successfully!');
    });
});