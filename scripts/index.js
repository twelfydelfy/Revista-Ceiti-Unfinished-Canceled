let currentslide = 1;

const overflow = document.querySelector('.overflow');
const midgrid = document.querySelector('.midgrid');
const slider = document.querySelector('.slider');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');

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