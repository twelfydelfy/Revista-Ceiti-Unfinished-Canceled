let currentslide = 1;

const overflow = document.querySelector('.overflow');
const midgrid = document.querySelector('.midgrid');
const slider = document.querySelector('.slider');

document.querySelector('.leftbtn').addEventListener('click', () =>{
    console.log('clicked');
    if(currentslide == 2){
        overflow.style.marginLeft = '-28.25vw';
        currentslide--;
    }
    else if(currentslide == 3){
        overflow.style.marginLeft = '-159vw';
        currentslide--;
    }
});
document.querySelector('.rightbtn').addEventListener('click', ()=>{
    console.log('clicked');
    if(currentslide == 1){
        overflow.style.marginLeft = '-159vw'
        currentslide++;
    }
    else if(currentslide == 2){
        overflow.style.marginLeft = '-291vw';
        currentslide++;
    }
});
