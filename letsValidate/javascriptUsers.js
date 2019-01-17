
document.getElementById("listUsersButton").addEventListener("click", () => {
	getUsers();
});

const getUsers = () => {
	users.forEach(item => {
		let liTemp = document.createElement("li");
		liTemp.setAttribute("class", "list");
		liTemp.setAttribute("id", item.id);

		let firstnameDiv = document.createElement("div");
		firstnameDiv.setAttribute("class", "user");
		let firstnameText = document.createTextNode(item.firstname);
		firstnameDiv.appendChild(firstnameText);
		liTemp.appendChild(firstnameDiv);

		let lastnameDiv = document.createElement("div");
		lastnameDiv.setAttribute("class", "user");
		let lastnameText = document.createTextNode(item.lastname);
		lastnameDiv.appendChild(lastnameText);
		liTemp.appendChild(lastnameDiv);

		let emailDiv = document.createElement("div");
		emailDiv.setAttribute("class", "user");
		let emailText = document.createTextNode(item.email);
		emailDiv.appendChild(emailText);
		liTemp.appendChild(emailDiv);

		let usernameDiv = document.createElement("div");
		usernameDiv.setAttribute("class", "user");
		let usernameText = document.createTextNode(item.username);
		usernameDiv.appendChild(usernameText);
		liTemp.appendChild(usernameDiv);

		let passwordDiv = document.createElement("div");
		passwordDiv.setAttribute("class", "user");
		let passwordText = document.createTextNode(item.password);
		passwordDiv.appendChild(passwordText);
		liTemp.appendChild(passwordDiv);

		document.getElementById("eachUser").appendChild(liTemp);
	});
};



