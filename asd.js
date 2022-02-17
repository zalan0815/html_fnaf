var kamera = 0;
function changeImage(a) {
    document.getElementById("img").src=a;
};


// if(kamera = 0){
//     changeImage("/images/kozep/kozep office nyitva")
// }
if(kamera = 1){
    changeImage("/images/jobb/jobb office nyitva.png")
}
if(kamera = -1){
    changeImage("/images/bal/bal office nyitva.png")
}

function balra() {
    kamera -= 1
    if(kamera < 1){
        kamera+= 1
    }
};
function jobbra() {
    kamera += 1
    if(kamera > 1){
        kamera-= 1
    }
};

