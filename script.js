let quotes = {
    quote: ['Less perfection, more authenticity.', 'Every moment matters','Be a voice, not an echo.',
     'Happiness is homemade.', 'Whatever you do, do it well', 'Quote of the century right here' ]
}

/*const index = 0;  // Set the index of the quote you want

switch (index) {
    case 0:
        console.log(quotes.quote[0]);
        break;
    case 1:
        console.log(quotes.quote[1]);
        break;
    case 2:
        console.log(quotes.quote[2]);
        break;
    case 3:
        console.log(quotes.quote[3]);
        break;
    case 4:
        console.log(quotes.quote[4]);
        break;
    default:
        console.log('Life is without meaning. You bring the meaning to it. The meaning of life is whatever you ascribe it to be. Being alive is the meaning.')
}*/

function randomQuote() {
    let randomIndex = Math.floor(Math.random()* quotes.quote.length);
    return quotes.quote[randomIndex];
}
console.log(randomQuote());




