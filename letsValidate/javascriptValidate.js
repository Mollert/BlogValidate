
// This code allows for the different folders per picking the tab.
document.getElementById("tabLeft").addEventListener("click", () => {
	document.getElementById("registerFolder").style.visibility = "hidden";
	document.getElementById("tabRight").style.visibility = "visible";
	document.getElementById("loginFolder").style.visibility = "visible";
});

document.getElementById("tabRight").addEventListener("click", () => {
	document.getElementById("loginFolder").style.visibility = "hidden";
	document.getElementById("tabLeft").style.visibility = "visible";
	document.getElementById("registerFolder").style.visibility = "visible";
});

// This code makes sure something is added to input boxes before moving on.
document.getElementById("loginButton").addEventListener("click", () => {
	document.getElementById("usernameError").style.visibility = "hidden";
	document.getElementById("passwordError").style.visibility = "hidden";
	let username = document.getElementById("usernameBox").value.trim();	
	let password = document.getElementById("passwordBox").value.trim();
	if (!(username)) {
		document.getElementById("usernameError").style.visibility = "visible";
		event.preventDefault();		
	}
	if (!(password)) {
		document.getElementById("passwordError").style.visibility = "visible";
		event.preventDefault();
	}
	if (username && password) {
		document.getElementById("loginInputs").reset();
	}
});

// The following is for register page.
// This code checks correct password construction.
// Then insures input boxes have the correct entries before moving on.
let passPassword = ["", "", "", ""];

document.getElementById("registerInputs").addEventListener("keyup", () => {
	let checkPassword = document.getElementById("createPasswordBox").value;	
	if (checkPassword.length >= 6) {
		document.getElementById("minChar").style.color = "green";
		passPassword[0] = true;
	}
	if ((/[a-z]/.test(checkPassword)) && (/[A-Z]/.test(checkPassword))) {
		document.getElementById("ulCase").style.color = "green";
		passPassword[1] = true;	
	}
	if (/\d/.test(checkPassword)) {
		document.getElementById("oneNum").style.color = "green";
		passPassword[2] = true;		
	}
	if (/[~!@#$%^&*]/.test(checkPassword)) {
		document.getElementById("specChar1").style.color = "green";
		document.getElementById("specChar2").style.color = "green";
		passPassword[3] = true;				
	}
});

document.getElementById("registerButton").addEventListener("click", () => {

	document.getElementById("firstNameError").style.visibility = "hidden";
	document.getElementById("lastNameError").style.visibility = "hidden";
	document.getElementById("emailError").style.visibility = "hidden";
	document.getElementById("createUsernameError").style.visibility = "hidden";
	document.getElementById("createPasswordError").style.visibility = "hidden";

	let firstName = document.getElementById("firstNameBox").value.trim();
	let lastName= document.getElementById("lastNameBox").value.trim();
	let email= document.getElementById("emailBox").value.trim();
	let username= document.getElementById("createUsernameBox").value.trim();
	let password= document.getElementById("createPasswordBox").value.trim();

	if (!(firstName)) {
		document.getElementById("firstNameError").style.visibility = "visible";
		event.preventDefault();		
	}
	if (!(lastName)) {
		document.getElementById("lastNameError").style.visibility = "visible";
		event.preventDefault();		
	}

	let emailCheck =  /^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,4}$/;
	isItFine = emailCheck.test(email);

	if (!(isItFine)) {
		document.getElementById("emailError").style.visibility = "visible";
		event.preventDefault();	
	}

	if (!(username)) {
		document.getElementById("createUsernameError").style.visibility = "visible";
		event.preventDefault();		
	}

	let passwordNum = 0;
	let passwordTF = false;	
	for (let i = 0 ; i < passPassword.length ; i++) {
		if (!(passPassword[i])) {
			document.getElementById("createPasswordError").style.visibility = "visible";
			event.preventDefault();			
		} else {
			passwordNum++;
		}
		if (passwordNum === 4) {
			passwordTF = true;
		}
	}

	if (firstName && lastName && isItFine && username && passwordTF) {
		document.getElementById("registerInputs").reset();
		document.getElementById("minChar").style.color = null;
		document.getElementById("ulCase").style.color = null;
		document.getElementById("oneNum").style.color = null;
		document.getElementById("specChar1").style.color = null;
		document.getElementById("specChar2").style.color = null;
	}

	console.log(passPassword);
	console.log(firstName + " : " + lastName + " : " + email + " : " + isItFine + " : " + username + " : " + password + " : " + passwordTF);

	users.push({"id": users.length, "firstname": firstName, "lastname": lastName, "email": email, "username": username, "password": password});
});