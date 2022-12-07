// // declaration of nodes
// const errorMessage = document.getElementById("error_message");
// const errorMessageContainer = document.getElementById(
//     "error_message_container"
// );
// const informationContainer = document.getElementById("information_container");
// const planetImage = document.getElementById("planet_image");
// const weightInformationContainer = document.getElementById(
//     "weight_information_container"
// );
// const planetInput = document.getElementById("planet_input");
// const massInput = document.getElementById('mass_input');
// const calculateWeightButton = document.getElementById('calculate_weight_button');
// const planetName = document.getElementById('planet_name');
// const weight = document.getElementById('weight')
// obj= {
//     g_earth : 9.798,
//     g_moon : 1.62,
//     g_mercury : 3.7,
//     g_mars : 3.71,
//     g_uranus : 8.87,
//     g_venus : 8.87,
//     g_saturn : 10.44,
//     g_neptune : 11.15,
//     g_jupiter : 24.92,
//     g_pluto : 0.58
// }

let arr = [1,2,3,4,5]
console.log(arr[2])

for(let i=arr;i<arr.length;i++){
    console.log(arr[i]);
}




// // call the initialize function
// init();

// // declare the initialize function
// function init() {
//     errorMessage.innerText = "Please select a planet";
//     // attach function to the eventlistener
//     planetInput.addEventListener('change', selectPlanet);
//     calculateWeightButton.addEventListener('click', calculateWeight)
// }

// function selectPlanet(event) {
//     const value = event.target.value;
//     if (!value) {
//         informationContainer.style.display = 'none';
//         errorMessageContainer.style.display = 'block';
//         errorMessage.innerText = "Please select a planet";
//     } else {
//         errorMessageContainer.style.display = "none";
//         informationContainer.style.display = "flex";
//         planetImage.setAttribute(
//             "src",
//             `https://raw.githubusercontent.com/geeksterin/WebCurriculum/master/Advance%20Js/Day-04/Project%20image/${value}.png`
//         );
//         weightInformationContainer.style.display = 'none';
//     }
// }

// function calculateWeight() {
//     const massValue = massInput.value
//     const gonplanet = `g_${planetInput.value}`
    
//     if (validateMass(massValue)) {
//         weightInformationContainer.style.display = 'flex';
//         planetName.innerText = planetInput.value.toUpperCase()
//         weight.innerText = `${convertMassIntoWeight(massInput.value, obj[gonplanet])} N`
//     } else {
//         informationContainer.style.display = 'none'
//         errorMessageContainer.style.display = 'block'
//         errorMessage.innerText = 'Please provide a valid mass'

//         setTimeout(() => {
//             errorMessageContainer.style.display = 'none'
//             informationContainer.style.display = 'flex'
//         }, 3000)
//     }
// }

// function validateMass(massValue) {
//     return massValue ? !isNaN(massValue) : false
// }

// function convertMassIntoWeight(mass, planet) {
//     let mass_planet = planet * mass;
//     return mass_planet;
// }