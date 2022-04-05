// Define function for handler
async function loginHandler(event) {
    // Prevent default behavior
    event.preventDefault();

    // Define global variables
    const email = document.querySelector('#loginEmailID').value.trim();
    const password = document.querySelector('#loginPasswordID').value.trim();

    // Logic
    if (email && password) {
        const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            //document.location.replace('/dashboard');
            alert("Login successful!");
        } else {
            alert(response.statusText);
        }
    }
}

// Add event listener
document.querySelector('#loginForm').addEventListener('submit', loginHandler);
