let clicked = false;
document.querySelector('.sec6down').addEventListener('click', ()=>{
    if(clicked == false){
        const child = document.querySelector('.sec6down .sec6hidden');
        child.classList.toggle('active');
        clicked == true;
    }else if(clicked == true){
        const child = document.querySelector('.sec6down .sec6hidden');
        child.classList.toggle('active');
        clicked == true;
    }
})