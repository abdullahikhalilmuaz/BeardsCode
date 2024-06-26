var rbks = document.getElementById("run-button")
var editor = document.getElementById("code-editor")
var output = document.getElementById("code-review")
rbks.addEventListener("click", ()=> {
    const code =editor.value
    var htmlDoc = document.implementation.createHTMLDocument()
    htmlDoc.body.innerHTML = code 
    output.innerHTML = htmlDoc.body.innerHTML
})

function show() {
    var one = document.querySelector(".one")
    var two = document.querySelector(".two")
    var three = document.querySelector(".three")
    document.querySelector(".side-nav").classList.toggle('active')    

    one.classList.toggle('active')
    two.classList.toggle('active')
    three.classList.toggle('active')
}
