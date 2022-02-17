//sleep funkció
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//alap irodai dolgok

var kamera = 0;
function changeImage(a) {
    document.getElementById("img").src=a;
};

function setOffice(){
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
    setOffice();
};
function jobbra() {
    kamera += 1
    if(kamera > 1){
        kamera-= 1
    }
    setOffice();
};

//ide majd a jumpscare-k kellenek, mert most csak fel/le teker, de meg kell csinálni, hogy aktív kamerát adjon stb

var canOpen = true;

async function openTimeOut(){
    await sleep(500);
    canOpen = true;
}

function fel(){
    if (canOpen == true){
        location.hash = "#ontop";
        canOpen = false;
        openTimeOut();
    }
};

function le(){
    if (canOpen == true){
        location.hash = "#ondown";
        canOpen = false;
        openTimeOut();
    }
};


//38 fel - 40 le  (w, s működik, de nyilakkal nem :c) window eventek

window.onkeydown = function(e) {
    if (e.keyCode == "39" || e.keyCode== "68"){
        jobbra();
    }
    else if (e.keyCode == "37" || e.keyCode== "65"){
        balra();
    }
    else if (e.keyCode == "38" || e.keyCode== "87"){
        fel();
    }
    else if (e.keyCode == "40" || e.keyCode== "83"){
        le();
    }
};

window.addEventListener("wheel", e => e.preventDefault(), { passive:false });