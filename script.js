/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getData(url) {
	try {
		const response = await fetch(url);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function getDataFromUrl(url, func) {
	const data = await getData(url);
	func(data);
	console.log(data);
}


function populateUsers(data) {
	const output = document.getElementById("output");
    output.innerHTML = "";
    
	data.forEach((dataItem) => {
        const outputbox = document.createElement("div");
        outputbox.classList.add("outputbox");

        const login = document.createElement("div");
        login.textContent = dataItem.login;
        login.classList.add("login");

        const avatarPicture = document.createElement("img");
        avatarPicture.src = dataItem.avatar_url;
        avatarPicture.classList.add("avatar_pic");

        outputbox.append(login, avatarPicture)
        output.append(outputbox);
	});
    
}

document.getElementById("btn").addEventListener('click', () => {
    getDataFromUrl(ENDPOINT,populateUsers);
    });

       





