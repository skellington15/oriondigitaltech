document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const uploadForm = document.getElementById('uploadForm');

    submitBtn.addEventListener('click', () => {
        if (uploadForm.style.display === 'none' || !uploadForm.style.display) {
            uploadForm.style.display = 'block';
        } else {
            uploadForm.style.display = 'none';
        }
    });

    const imageForm = document.getElementById('imageForm');
    imageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('fileInput');
        if (fileInput.files.length > 0) {
            const formData = new FormData();
            formData.append('image', fileInput.files[0]);

            // Replace the URL with your server endpoint to handle the upload
            fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Image uploaded successfully');
                fileInput.value = ''; // Clear the input
                uploadForm.style.display = 'none'; // Hide the form
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                alert('Error uploading image');
            });
        } else {
            alert('Please select an image to upload');
        }
    });
});