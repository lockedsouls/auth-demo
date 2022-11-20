if (window.localStorage.getItem("client") !== null){
    document.querySelector("#login-button").onclick = () => console.log("Already logged in");
}

function foo(){
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    
    if (username === "" && password === "") console.error("Invalid inputs");
    else if (username === "") console.error("Invalid username");
    else if (password === "") console.error("Invalid password");
    else{
        window.localStorage.setItem("client", `{"username": "${username}", "password": "${password}"}`);
        document.querySelector("#login-button").onclick = () => console.log("Already logged in");
    }
}

function LogOut(){
    window.localStorage.clear();
    document.querySelector("#login-button").onclick = foo;
}