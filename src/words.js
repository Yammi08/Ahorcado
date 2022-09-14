
class arrayWords
{
    constructor()
    {
        this.words =
        [
            'html',
            'css',
            'calamardo',
            'catastrofe'
        ];
    }
    add(word)
    {
        this.words.add(word)
    }
    remove(id)
    {
        this.words.splice(id);
    }
    drawElements()
    {
        let result = '';
        
        for(let i = 0; i< this.getElements().length;i++)
        {
            result+=`
            <div class="item-list">
            <h3>${this.getElements()[i]}</h3> <div id="${i}" class="btn-special icon">x</div>
            </div>`
        }
        return result;
    }
    getElements()
    {
        return this.words;
    }
}
var words = new arrayWords();
document.getElementById('lista-palabras').innerHTML = words.drawElements();