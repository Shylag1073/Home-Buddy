// Define function for handler
async function signupHandler(event) {
    // Prevent default behavior
    event.preventDefault();

    // Define global variables
    const email = document.querySelector('#signinEmailID').value.trim();
    const password = document.querySelector('#signinPasswordID').value.trim();

    // Logic
    if (email && password) {
        const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            //document.location.replace('/dashboard');
            alert("Signup successful!");
        } else {
            alert(response.statusText);
        }
    }
}

// Add event listener
document.querySelector('#signupForm').addEventListener('submit', signupHandler);