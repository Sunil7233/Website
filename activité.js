
const box = document.querySelector(".box");
var anim = document.querySelectorAll(".box");

console.log(100);

box.addEventListener("mouseover", (e)=>{
   
    console.log(navigator.geolocation.getCurrentPositiongetCurrent
    );
    console.log();
    if (e.view.innerWidth > 570){
        for (var i = 0; i< anim.length; i++) {
            if (anim[i].style.animationPlayState == 'paused') {
                anim[i].style.animationPlayState = 'running';
            }
            else {
                anim[i].style.animationPlayState = 'paused';
            }
        }  
    } else{
        for (var i = 0; i< anim.length; i++){
            anim[i].style.animationPlayState = 'running';
        }
    }  
})

box.addEventListener("mouseout", ()=>{
    for (var i = 0; i< anim.length; i++){
        anim[i].style.animationPlayState = 'running';
    }
});





    
