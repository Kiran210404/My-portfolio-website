document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('profilePhoto');

    profilePhoto.addEventListener('click', () => {
        profilePhoto.classList.toggle('maximized');
    });
});
