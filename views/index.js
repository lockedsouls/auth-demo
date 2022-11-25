if (window.localStorage.getItem("client") !== null){
    const client = JSON.parse(window.localStorage.getItem("client"));
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    document.querySelector("#login-button").onclick = () => LogOut();
    document.querySelector("#login-button").innerHTML = "Log out";

    username.classList.add("disabled"); username.value = client.username;
    password.classList.add("disabled"); password.value = client.password;
}

function foo(){
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    
    if (username === "" && password === "") console.error("Invalid inputs");
    else if (username === "") console.error("Invalid username");
    else if (password === "") console.error("Invalid password");
    else{
        window.localStorage.setItem("client", `{"username": "${username}", "password": "${password}"}`);
        document.querySelector("#login-button").onclick = () => LogOut();
        document.querySelector("#login-button").innerHTML = "Log out";
        document.querySelector("#username").classList.add("disabled");
        document.querySelector("#password").classList.add("disabled");
    }
}

function LogOut(){
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    window.localStorage.clear();
    document.querySelector("#login-button").onclick = foo;
    document.querySelector("#login-button").innerHTML = "Log in";
    username.classList.remove("disabled"); username.value = ""; username.placeholder = "Username";
    password.classList.remove("disabled"); password.value = ""; password.placeholder = "Password";
}

function password_visiblity(){
    const password = document.querySelector("#password");
    const span = document.querySelector("span");
    span.onclick = () => {
        if (span.innerHTML == "Show"){
            password.type = "text";
            span.innerHTML = "Hide";
        }else{
            password.type = "password";
            span.innerHTML = "Show";
        }
    }
}
password_visiblity();