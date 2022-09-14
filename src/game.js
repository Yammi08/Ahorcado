var tries = 0;

var state = "G";
var letter = [];
var rand = ()=>
{
    return Math.floor(Math.random()*10*word.length)%word.length;
}
var randWord = ()=>
{
    return word[rand()];
}
function selectChar(input)
{
    let notFound = false;
    let result = [];
    if(letter.indexOf(input) == -1)
    {
        for(let i = 0;i<selectWord.length;i++)
        {
            
            
            i = selectWord.indexOf(input,i);
            if(i == -1)
            {
                notFound = true;
                break;
            }
            result.push(i);
        }
        if(notFound && result.length == 0)
        {
            if(tries < draw.length)
            {
                draw[tries]();
                tries += 1;
            }
            else
            {
                state = 'L';
            }
        }
    }
    
    letter.push(input);
    return result;
}

