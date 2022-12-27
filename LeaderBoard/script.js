let firstNameInput = document.getElementById('first_name');
let lastNameInput = document.getElementById('last_name');
let countryInput = document.getElementById('country');
let scoreInput = document.getElementById('score');

const addButton = document.getElementById('add_button');

let playerInfo = document.getElementById('player_info');

init()

function init() {
    addButton.addEventListener('click', addCard);
}


function addCard() {
    console.log(playerInfo)
    playerInfo.innerHTML += `<div id="player_card">
    <label id="name" for="name">${firstNameInput.value + " " + lastNameInput.value}
        <br>
        <span class="entry_time">JAN 30, 2020 01:09</span>
    </label>
    <label id="country_name" for="country">${countryInput.value}</label>
    <label id="score_marks" for="score">${scoreInput.value}</label>
    <button id="delete_player" onclick = "deleteButton(event)"><i style="color: red;" class="fa fa-trash-o"></i></button>
    <button class="add_5" onclick = "addfive(event)">+5</button>
    <button id="substract_5" onclick = "removefive(event)">-5</button>
</div>`;

}

function deleteButton(event) {
    event.target.parentElement.remove(event.target)
}

function addfive(event) {
    var add = event.target.parentElement
    for (const child of add.children) {
        if (child.getAttribute('id') === 'score_marks') {
            child.innerText = parseInt(child.textContent) + 5;
        }
    }
}

function removefive(event) {
    var sub = event.target.parentElement
    for (const child of sub.children) {
        if (child.getAttribute('id') === 'score_marks') {
            child.innerText = parseInt(child.textContent) - 5;
        }
    }
}

var scoreArray = []
var countryArray = []
var nameArray = []
function sortScore() {
    for (const child of playerInfo) {
        for (const childs of child) {
            if (childs.getAttribute('id') === 'score_marks') {
                scoreArray.push(parseInt(childs.textContent))
            }
            if (childs.getAttribute('id') === 'name') {
                nameArray.push(parseInt(childs.textContent))
            }
            if (childs.getAttribute('id') === 'country_name') {
                countryArray.push(parseInt(childs.textContent))
            }
        }
    }

}

function sort() {
    sortScore()
    for (let i = 0; i < scoreArray.length; i++) {
        for (let j = i + 1; j < scoreArray.length; j++) {
            if (scoreArray[j] < scoreArray[j + 1]) {
                let temp = scoreArray[j];
                scoreArray[j] = scoreArray[j + 1];
                scoreArray[j + 1] = temp;
                let temp1 = countryArray[j];
                countryArray[j] = countryArray[j + 1];
                countryArray[j + 1] = temp1;
                let temp2 = nameArray[j];
                nameArray[j] = nameArray[j + 1];
                nameArray[j + 1] = temp2;
            }
        }
    }
    // console.log(scoreArray)

    var index = -1;
    for (const child of playerInfo) {
        index++;
        for (const childs1 of child) {
            if (childs1.getAttribute('id') === 'score_marks') {
                childs1.innerText = scoreArray[index]
            }
            if (childs1.getAttribute('id') === 'name') {
                childs1.innerText = nameArray[index]
            }
            if (childs1.getAttribute('id') === 'country_name') {
                childs1.innerText = countryArray[index]
            }
        }
    }

}

