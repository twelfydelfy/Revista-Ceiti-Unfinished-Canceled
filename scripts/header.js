let burgerstate = false;
const menu = document.querySelector('.hmobextended');
const exit = document.querySelector('.headerx');

exit.addEventListener('click', ()=>{
    menu.style.display = 'none';
    burgerstate = false;
    console.log(burgerstate);
});


document.querySelector('.hmobburger').addEventListener('click', ()=>{
    if(!burgerstate){
        menu.style.display = 'flex';
        burgerstate = true;
    }
    else if(burgerstate){
        menu.style.display = 'none';
        burgerstate = false;
    }
});

if (window.innerWidth < 700){
    if (window.location.href.endsWith("index.html")) {
        document.querySelector('.pg1header').style.color = 'black';
        document.querySelector('.pg1header').style.textDecoration = 'underline';
    }
    if (window.location.href.endsWith("page2.html")) {
        document.querySelector('.pg2header').style.color = 'black';
        document.querySelector('.pg2header').style.textDecoration = 'underline';
    }
    if (window.location.href.endsWith("page3.html")) {
        document.querySelector('.pg3header').style.color = 'black';
        document.querySelector('.pg3header').style.textDecoration = 'underline';
    }
    if (window.location.href.endsWith("page3child.html")) {
        document.querySelector('.pg3header').style.color = 'black';
        document.querySelector('.pg3header').style.textDecoration = 'underline';
    }
    if (window.location.href.endsWith("page4.html")) {
        document.querySelector('.pg4header').style.color = 'black';
        document.querySelector('.pg4header').style.textDecoration = 'underline';
    }
    if (window.location.href.endsWith("page5.html")) {
        document.querySelector('.pg5header').style.color = 'black';
        document.querySelector('.pg5header').style.textDecoration = 'underline';
    }
}