
function createCharHtml(id,char) 
{
    let result = 
    `
    <div class="text" id="letter-${id}">
        <h2 id = "char-${id}">${char}</h2>
    </div>
    `
    return result;
}
function createCharactersHtml()
{
    let main = document.getElementsByClassName('word')[0];
    for(let i = 0; i < selectWord.length;i++)
    {
        main.innerHTML += createCharHtml(i, '__');
    }
}


function updateCharHtml(id)
{
    let char = document.getElementById(`char-${id}`)
    char.parentElement.classList.add('word-visible');
    char.innerHTML = selectWord[id];
}

var key;
function updateCharactersHtml(input)
{
    
    if(key != input.key && state == 'G' && state != ' ')
    {
        key = input.key;
        let poschar = selectChar(key);
        poschar.forEach(element=>
            {
                characters[element] = key;
                updateCharHtml(element);
            });
        if(characters.indexOf(' ') == -1)
        {
            state = 'W'
        }
        endGame();
    }
}