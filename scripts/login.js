alert("This is just a demo login page!");

function toggleAuth(mode) {
	const loginForm = document.getElementById("loginForm");
	const loginBtn = document.getElementById("login");
	const signupForm = document.getElementById("signupForm");
	const signupBtn = document.getElementById("signup");
	const loginSec = document.getElementById("login-sec");
	const signupSec = document.getElementById("signup-sec");
	const logo = document.getElementById("logo");
	const close = document.getElementById("x");

	const isLogin = mode === "login";

	// Update flex and background
	loginSec.style.flex = isLogin ? "1.5" : "1";
	signupSec.style.flex = isLogin ? "1" : "1.5";
	loginSec.style.backgroundColor = isLogin ? "#fafafa" : "#2e2e2e";
	signupSec.style.backgroundColor = isLogin ? "#2e2e2e" : "#fafafa";
	logo.style.color = isLogin ? "#2e2e2e" : "#fafafa";
	close.style.color = isLogin ? "#fafafa" : "#2e2e2e";

	// Toggle form visibility
	loginForm.classList.toggle("active", isLogin);
	loginForm.classList.toggle("hidden", !isLogin);
	signupForm.classList.toggle("active", !isLogin);
	signupForm.classList.toggle("hidden", isLogin);

	// Toggle button visibility
	loginBtn.classList.toggle("hidden", isLogin);
	loginBtn.classList.toggle("active", !isLogin);
	signupBtn.classList.toggle("hidden", !isLogin);
	signupBtn.classList.toggle("active", isLogin);
}

// Usage
function signin() {
	toggleAuth("login");
}

function logup() {
	toggleAuth("signup");
}

function login() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("loginPassword").value;
	let error = document.getElementById("error");
	error.style.color = "red";
	error.style.fontSize = "1vw";
	if (email == "admin@gmail.com" && password == "admin") {
		window.location.replace("../home.html");
	} else {
    error.innerHTML = `Error Occured`;
	}
}

function signup() {
	let error = document.getElementById("error2");
	error.style.color = "green";
	error.style.fontSize = "1vw";
	error.style.textAlign = "center";
	error.innerHTML = "Creating account <br> wait few sec";
	setTimeout(() => {
		signin();
	}, 2000);
}

function togglePassword(icon, inputId) {
	const input = document.getElementById(inputId);
	const isPassword = input.type === "password";

	input.type = isPassword ? "text" : "password";
	icon.classList.toggle("ri-eye-line", !isPassword);
	icon.classList.toggle("ri-eye-off-line", isPassword);
}