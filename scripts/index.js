let currentslide = 1;

let currentbox = 1;

const overflow = document.querySelector('.overflow');
const midgrid = document.querySelector('.midgrid');
const slider = document.querySelector('.slider');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const overflow2 = document.querySelector('.overflow2');

document.querySelector('.leftbtn').addEventListener('click', () =>{
    console.log('clicked');
    if(currentslide == 2){
        overflow.style.marginLeft = '-14vw';
        currentslide--;
    }
    else if(currentslide == 3){
        overflow.style.marginLeft = '-116vw';
        currentslide--;
    }
    dotscolor();
});
document.querySelector('.rightbtn').addEventListener('click', ()=>{
    console.log('clicked');
    if(currentslide == 1){
        overflow.style.marginLeft = '-116vw'
        currentslide++;
    }
    else if(currentslide == 2){
        overflow.style.marginLeft = '-242vw';
        currentslide++;
    }
    dotscolor();
});

function dotscolor(){
    dot1.style.opacity = '.3';
    dot2.style.opacity = '.3';
    dot3.style.opacity = '.3';
    if(currentslide == 1){
        dot1.style.opacity = '1';
    }   else if(currentslide == 2){
        dot2.style.opacity = '1';
    }else if(currentslide == 3){
        dot3.style.opacity = '1';
    }
}

document.querySelectorAll('.box2button').forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(currentbox == 1){
            overflow2.style.marginLeft = '-100%';
            currentbox = 2;
            document.querySelector('.box21').classList.remove('active');
            document.querySelector('.box22').classList.add('active');
        }
        else if(currentbox == 2){
            overflow2.style.marginLeft = '-200%';
            currentbox = 3;
            document.querySelector('.box22').classList.remove('active');
            document.querySelector('.box23').classList.add('active');
        }
        else if(currentbox == 3){
            overflow2.style.marginLeft = '0%';
            currentbox = 1;
            console.log(currentbox);
            document.querySelector('.box23').classList.remove('active');
            document.querySelector('.box21').classList.add('active');
        }
    });
});