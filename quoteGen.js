
//create variable

let btn=document.querySelector(".newbtn");
let person=document.querySelector(".person");
let quote=document.querySelector(".quote");

const quotes=[ 
            {quote: '“Be yourself, everyone else is already taken.”' ,
              person:'Oscar Wilde'},
              {quote:'“Two things are infinite: the universe and human stupidity, and I am not sure about the universe”' ,
                person:'Albert Einstein'},
                {quote: '“Be yourself, everyone else is already taken.”' ,
                person:'Oscar Wilde'},
                    {quote:'“Two things are infinite: the universe and human stupidity, and I am not sure about the universe”' ,
                    person:'Albert Einstein'},
                        {quote: '“Be yourself, everyone else is already taken.”' ,
                        person:'Oscar Wilde'},
                            {quote:'“Two things are infinite: the universe and human stupidity, and I am not sure about the universe”' ,
                            person:'Albert Einstein'}];

btn.addEventListener("click", function(){
    let random= Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});