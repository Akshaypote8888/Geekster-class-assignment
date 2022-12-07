let inputText = document.getElementById('input_text')
let addContainer = document.getElementById('add_container')


init()
function init(){
    document.getElementById('add_item').addEventListener('click', addText)
    var node = document.getElementsByClassName('Delete_button')
    // console.log(node)
    for(let i=0;i<node.length;i++){
            node[i].addEventListener('click',e => {
                node.remove(e.target)
            })
    }
}

function addText() {
    addContainer.innerHTML += `<div class="list">
    <li>${inputText.value}</li><button class="Delete_button" onclick ="deleteButton(event)">Delete</button>
</div>`
    inputText.value = ''
    
    // console.log(node.text)
}

function deleteButton(event){
    event.target.parentElement.remove(event.target)
}

