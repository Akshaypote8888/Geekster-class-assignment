let inputText = document.getElementById('input_text')
let addContainer = document.getElementById('add_container')

init()
function init(){
    document.getElementById('add_item').addEventListener('click', addText)
}

function addText() {
    addContainer.innerHTML += `<div class="list">
    <li>${inputText.value}</li><button class="Delete_button" onclick = "deleteItem()">Delete</button>
</div>`
    inputText.value = ''
}

function deleteItem() {
    const list = document.getElementById("add_container");
    list.removeChild(list.firstElementChild);
}

