var characters = [];
var selectWord = randWord();
characters.length = selectWord.length;
characters.fill(' ',0,selectWord.length);
createCharactersHtml();
window.onkeydown = updateCharactersHtml;
