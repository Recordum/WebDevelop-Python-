const LoginForm =  document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");

const link = document.querySelector("#login-form a");


function onLoginSubmit(event) {
    event.preventDefault();
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);

}

LoginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick)
