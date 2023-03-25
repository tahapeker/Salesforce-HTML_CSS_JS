let items = document.querySelectorAll('li');
for(let i=0; i<items.length; i++)
    console.log(items[i].innerHTML);

const heading = document.getElementById('heading');
function heading1(){
    heading.setAttribute('class', 'heading1');
    
}

function heading2(){
    heading.setAttribute('class', 'heading2');
}