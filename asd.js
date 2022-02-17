var kamera = 0;
function changeImage(a) {
    document.getElementById("img").src=a;
};


function setCam(){
    if(kamera == 0){
        changeImage("/images/kozep/kozep office nyitva.png");
    }
    else if(kamera == 1){
        changeImage("/images/jobb/jobb office nyitva.png");
    }
    else if(kamera == -1){
        changeImage("/images/bal/bal office nyitva.png");
    }
};

function balra() {
    kamera -= 1
    if(kamera < -1){
        kamera+= 1
    }
    setCam();
};
function jobbra() {
    kamera += 1
    if(kamera > 1){
        kamera-= 1
    }
    setCam();
};

window.onkeydown = function(e) {
    if (e.keyCode == "39" || e.keyCode== "68"){
        jobbra()
    }
    else if (e.keyCode == "37" || e.keyCode== "65"){
        balra()
    }
}