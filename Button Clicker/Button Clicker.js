console.log("page loaded...");

function message(){
    alert("Ninja was liked!");
}

function login(lbtn){
    if(lbtn.innerText == "Login") {
        lbtn.innerText = "Logout";
    } else {
        lbtn.innerText = "Login";
    }
}

function remove(abtn) {
    abtn.remove();
}
