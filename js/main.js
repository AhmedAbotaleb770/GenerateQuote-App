var arrayOfQuotes=[
{
    quote:'Be yourself, everyone else is already taken.',
    auther:'Oscar Wilde'
},
{
    quote:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    auther:'Albert Einstein'
},
{
    quote:'A room without books is like a body without a soul.',
    auther:'Marcus Tullius Cicero'
},
{
    quote:'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
    auther:'Bernard M. Baruch'
},
{
    quote:'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams',
    auther:'Dr. Seuss'
},
{
    quote:'You only live once, but if you do it right, once is enough.',
    auther:'Mae West'
},
{
    quote:'Be the change that you wish to see in the world.',
    auther:'Mahatma Gandhi'
},
{
    quote:'In three words I can sum up everything I\'ve learned about life: it goes on.',
    auther:'Robert Frost'
},
{
    quote:'If you tell the truth, you don\'t have to remember anything.',
    auther:'Mark Twain'
},
{
    quote:'A friend is someone who knows all about you and still loves you.',
    auther:'Elbert Hubbard'
}
];

function generateQuote(){
    var random=Math.trunc(Math.random()*arrayOfQuotes.length);
    document.getElementById('quoteOutput').innerHTML= `"${arrayOfQuotes[random].quote}"`;
    document.getElementById('authorOutput').innerHTML= `-- ${arrayOfQuotes[random].auther}`;
}