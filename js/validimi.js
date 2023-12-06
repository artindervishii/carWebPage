

const btn = document.getElementById('submit');

function validimi(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if(name === "" || email=== "" || message === ""){
        alert("You have to Fill all the requested columns")
        return false;
    }


}

btn.addEventListener('click',validimi);