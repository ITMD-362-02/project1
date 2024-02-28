document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        let message = 'Registration Successful!\n';
        for (let pair of formData.entries()) {
            message += `${pair[0]}: ${pair[1]}\n`;
        }
        alert(message);
    });
});