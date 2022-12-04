var clickButton = document.getElementById('button_click')
var addText = document.getElementById('add_text')

clickButton.addEventListener('click',printText)

function printText(){
    addText.innerHTML = `<h2 id="add_text">Image Element Added</h2>
    <img id="image" src="logo.JPG">`
}



