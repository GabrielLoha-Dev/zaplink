function getlink() {
    const number = document.getElementById("tel").value
    const message = document.getElementById("message").value
    const link = document.getElementById("linkwa")
    const error_message = document.getElementById("error")

    if (!isNaN(number)) {
        if (number.length < 11) {
            error_message.innerText = "Número incompleto! Não esqueça do DDD."
            error_message.style.display = "flex"
        } else {
            const formattext = message.replace(/ /g, "%20")
            link.innerHTML = `https://wa.me/+55${number}?text=${formattext}`
            error_message.style.display = "none"
        }


    } else {
        error_message.innerText = "Número Invalido!"
        error_message.style.display = "flex"
    }

}

function copy() {
    var text = document.getElementById("linkwa")
    var select = window.getSelection()
    var range = document.createRange()
    const check = document.getElementById("copysucefull")
    range.selectNodeContents(text)

    select.removeAllRanges();
    select.addRange(range);

    document.execCommand("copy")
    select.removeAllRanges()

    check.style.display = "flex"
}