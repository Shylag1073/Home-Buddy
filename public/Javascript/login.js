async function signupHandler(event) {
    event.preventDefault();

    const email = document.querySelector("email-id-here").value.trim();
    const password = document.querySelector("password-id-here").value.trim();

    if (email && password) {
        await fetch("/api/users", {
          method: "post",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          console.log("success");
        } else {
          alert(response.statusText);
        }
    }
};

async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector("email-id-here").value.trim();
    const password = document.querySelector("password-id-here").value.trim();

    if (email && password) {
        //TODO: make sure this is the right html path
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

        if (response.ok) {
          //TODO: change here to direct to dashboard
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector(".signup-form-selector").addEventListener("submit", signupHandler);
document.querySelector(".login-form-selector").addEventListener("submit", loginHandler);