let searchInput = document.getElementById('search_input')
let emojiListContainer = document.getElementById('emoji_list')


init()

function init(){
     renderEmoji()
    searchInput.addEventListener('keyup', renderEmoji)
}

function renderEmoji() {
    let html = ''
    let emojiListCopy = [...emojiList]
    // const inputValue = searchInput.value
    emojiListCopy = emojiListCopy.filter((emoji) =>{
        for(let i=0;i<emoji.aliases.length;i++){
            return emoji.aliases[i].toLowerCase().includes(searchInput.value.toLowerCase())
        } 
    })
    for(let i=0;i<emojiListCopy.length;i++){
        html+= `
        <hr id = "line">
        <div class="emoji_row">
        <span class="emoji">${emojiListCopy[i].emoji}</span>
        <span class="emoji_name">${emojiListCopy[i].aliases[0]}</span>
        <span id="emoji_description">${emojiListCopy[i].description}</span>
       
    </div>`
    }
    emojiListContainer.innerHTML = html
}



