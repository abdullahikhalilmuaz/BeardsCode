var code = Array.from(document.querySelectorAll(".code"));
  var copy = Array.from(document.querySelectorAll(".copy"));
  code.forEach((element, index) => {
    copy[index].addEventListener("click", ()=> {
      navigator.clipboard.writeText(element.textContent)
      alert ("Copied successfully!")
      var copyDetails = Array.from(document.querySelectorAll(".copy-details"))
      copyDetails.classList.remove('active')
      var editor = Array.from(document.querySelectorAll(".copy-details"))
      copyDetails.classList.remove('active')
    })
  });



//   <div class="details">
//   <img src="../images/copy.jpg"class="copy" style="width: 22px; cursor: pointer;" id="copy">
//   <div class="copy-details">
//       copied successfuly! <br>
//       <a href="/profile/editor.html" class="edit">Editor ?</a>
//   </div>
// </div>