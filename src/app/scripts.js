exports.callScripts=function() {
    document.querySelector('#duplicate').addEventListener('click', (e)=> {
        var card = document.querySelector('#cardContainer');
        var cardClone = card.cloneNode(true);
        card.parentNode.appendChild(cardClone);
    });
    
    document.querySelector('#colorChange').addEventListener('click', (e)=> {
        var cards = document.querySelectorAll('#cardContainer');
        var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        for (const e of cards) {
            e.style.backgroundColor = newColor;
        }
    });
    
    document.querySelector('#deleteLast').addEventListener('click', (e)=> {
        const cards = document.querySelectorAll('#cardContainer');
        if (cards.length > 1) {
            cards[cards.length - 1].parentNode.removeChild(cards[cards.length - 1]);
        }
    });
    
    document.querySelector('#headingChange').addEventListener('click', (e)=> {
        var cards = document.querySelectorAll('#title');
        for (const e of cards) {
            e.textContent = 'something else';
        }   
    });
}
