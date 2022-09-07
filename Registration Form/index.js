const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById("submit");
const users = document.getElementById("users")
const list = document.getElementById("list")
const userList = document.getElementById("userlist")
const seznam = document.getElementById("seznam")

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});



    submit.addEventListener("click", () => {
		
			seznam.append(`${username.value} ${email.value} `)
		
			
		
	} )


function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue.length < 4) {
		setErrorFor(username, 'Username has to have at least 4 characters');
	} else if (usernameValue.length > 65) {
        setErrorFor(username, 'Username has more than 64 characters');
    }else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue.length < 8) {
		setErrorFor(password, 'Password needs at least 8 characters');
	} else if(passwordValue.length > 65) {
        setErrorFor(password, 'Password has more than 64 characters');
    }else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






