
class arrayWords
{
    constructor()
    {
        this.i = 0;
        if(localStorage.getItem('words') == null)
            localStorage.setItem('words',`html,css,calamardo,catastrofe`);
    }
    add(word)
    {
        let w = localStorage.getItem('words');
        if(w!='')
        {
            w +=','+ word;
        }
        else
        {
            w = word;
        }
        
        document.getElementById('lista-palabras').innerHTML += this.styleHtml(this.i,word);
        localStorage.setItem('words',w);
    }
    remove(word)
    {
        let w = localStorage.getItem('words').split(',');
        w.splice(this.indexOf(word),1);
        console.log(w.toString());
        localStorage.setItem('words',w.toString())
    }
    find(word)
    {
        
        let req = this.getElements().indexOf(word);
        if(req == -1)
        {
            return false;
        }
        return true;
    }
    indexOf(word)
    {
        let w = this.getElements();
        return w.indexOf(word);
    }
    drawElements()
    {
        let result = '';
        const arr = this.getElements();
        while(this.i < arr.length)
        {
            result+=this.styleHtml(this.i,arr[this.i]);
            this.i+=1;
        }
        
        return result;
    }
    styleHtml(id,word)
    {
        return `<div class="item-list">
        <h3>${word}</h3> <div id="${id}" onclick="ejecucion(${id},'${word}')" class="btn-special icon"><h3>x</h3></div>
        </div>`
    }
    getElements()
    {
        let r =localStorage.getItem('words').split(',');
        if(r[0] == '')
        {
            r = [];
        }
        return r;
    }
}

var words = new arrayWords();
