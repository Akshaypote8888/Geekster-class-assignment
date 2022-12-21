let firstNameInput = document.getElementById('first_name');
let lastNameInput = document.getElementById('last_name');
let countryInput = document.getElementById('country');
let scoreInput = document.getElementById('score');

const addButton = document.getElementById('add_button');

let playerInfo = document.getElementById('player_info');

init()

function init(){
    addButton.addEventListener('click', addCard);

    var node = document.getElementsByClassName('delete_player')
    // console.log(node)
    for(let i=0;i<node.length;i++){
            node[i].addEventListener('click',e => {
                node.remove(e.target)
            })
    }
}

function addCard(){
    playerInfo.innerHTML += `<div id="player_card">
    <label id="name" for="name">${firstNameInput.value+" "+lastNameInput.value}
        <br>
        <span class="entry_time">JAN 30, 2020 01:09</span>
    </label>
    <label id="country_name" for="country">${countryInput.value}</label>
    <label id="score_marks" for="score">${scoreInput.value}</label>
    <button id="delete_player" onclick = "deleteButton(event)"><i style="color: red;" class="fa fa-trash-o"></i></button>
    <button id="add_5">+5</button>
    <button id="substract_5">-5</button>
</div>`;
}

function deleteButton(event){
    
}

function addfive(event){
    event.target.parentElement.remove(event.target)
}

function removefive(event){
    event.target.parentElement.remove(event.target)
}

