var msg = document.getElementById('state-game');
function screen(message)
{
    let result = 
    `
    <h1 id="message-endgame">${message}</h1>
    `
    msg.classList.add('message-background');
    return result;
}

function endGame()
{
    if(state == 'W')
    {
        msg.innerHTML = screen('ganaste');
        msg.classList.add('message-background-green');
    }
    else if(state == 'L')
    {
        msg.innerHTML = screen('perdiste');
        msg.classList.add('message-background-red');
    }
}