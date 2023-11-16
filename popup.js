console.log("This is a poopup!")

setTimeout(wait_print, 1000)

function wait_print() {
    const divfound = document.getElementsByClassName("middle")

    newbutton = document.createElement("button");
    newbutton.innerHTML = "Print Tempo to console!";
    divfound[0].appendChild(newbutton);
    newbutton.onclick = console_log_test

    console.log(divfound)
}

function console_log_test () {
    console.log(document.getElementsByClassName("tempo")[0].value)
}
