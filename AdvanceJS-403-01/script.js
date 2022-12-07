
document.querySelector('body').addEventListener('keyup',myFunction)
let nameB = document.getElementById('name')
let buttonName = document.getElementById('button_name')


function myFunction(event) {
    var x = event.key;
    document.getElementById("button_name").innerHTML = `You pressed <span id="name"></span> `;
    document.getElementById('name').innerText = x;
    let unicode= event.which;
    document.getElementById('button_code').innerHTML = `<div id="code"></div>`
    document.getElementById("code").innerText =  unicode;
    console.log(event.key)
  }