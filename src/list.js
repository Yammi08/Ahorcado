function ejecucion(i,word)
{
    words.remove(word);
    document.getElementById(i).parentElement.remove();
    console.log(words.getElements());
    if(words.getElements().length == 0)
    {
        let list = document.getElementById('lista-palabras');
        list.innerHTML = drawnoItem();
    }
}
function drawnoItem()
{
    let result = `<h1 class="message">agrega una palabra que no tenga comillas o comas</h1>`;
    return result;
}
function anadir()
{
    let w =  document.getElementById('word-input').value.toLowerCase();
    document.getElementById('word-input').value = '';
    if(words.getElements().length <= 0)
    {
        document.getElementById('lista-palabras').innerHTML = '';
    }
    if(w != '' && !words.find(w))
    {
        words.add(w);
    }
}
let req = words.drawElements()
if(req == '')
{
    req = drawnoItem();
}
document.getElementById('lista-palabras').innerHTML = req;
