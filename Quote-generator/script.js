const text=document.getElementById("quote");
const author=document.getElementById("author");
const nextButton = document.getElementById('next_button')


init()

function init(){
    nextButton.addEventListener('click', getNewQuote)
}

async function getNewQuote()
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;
    text.innerHTML= `<span class="symbol">&#8220;</span>${quote}<span class="symbol">&#8221;</span>`;
    author.innerHTML="~ "+auth;

}
getNewQuote();