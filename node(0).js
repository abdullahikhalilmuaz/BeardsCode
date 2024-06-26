function make() {
   var fileInput = document.createElement("input")
   fileInput.type = "file"
   document.body.appendChild(fileInput) // Add this line
   fileInput.click()
   fileInput.style.display = "none"
   fileInput.addEventListener("change", e => {
    var file = e.target.files[0]
    var reader = new FileReader()
    reader.onload = e => {
      // var imageData = document.getElementById("img")
      // var imageContainer = document.querySelector(".image-container")
      localStorage.setItem("userImage", e.target.result)
      // imageData.src = localStorage.getItem("userImage")
      // imageContainer.appendChild(imageData) // Add this line
    }
    reader.readAsDataURL(file)
  })
}

var imageData = document.getElementById("img")
      var imageContainer = document.querySelector(".image-container")
    
      imageData.src = localStorage.getItem("userImage")
      imageContainer.appendChild(imageData)

function show() {
   var one = document.querySelector(".one")
   var two = document.querySelector(".two")
   var three = document.querySelector(".three")
   document.getElementById("side-nav").classList.toggle('active')    

   one.classList.toggle('active')
   two.classList.toggle('active')
   three.classList.toggle('active')
}

var user0 = document.getElementById("user0")
var user1 = document.getElementById("user1")
var locator = document.getElementById("locator")
user0.textContent = localStorage.getItem("fName").toUpperCase()
user1.textContent = localStorage.getItem("lName").toUpperCase()
locator.textContent = localStorage.getItem("email")