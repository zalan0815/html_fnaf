//sleep funkció
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var irodaBAL = ["./images/bal/bal office nyitva.png","./images/bal/bal office lampa.png","./images/bal/bal office zarva.png","./images/bal/bal office zarva lampa.png"];
var irodaJOBB = ["./images/jobb/jobb office nyitva.png","./images/jobb/jobb office lampa.png","./images/jobb/jobb office zarva.png","./images/jobb/jobb office zarva lampa.png"];
var irodaKOZEP = "./images/kozep/kozep office nyitva.png";

var doors = [false, false];

var lampaOn = false;
//alap irodai dolgok

var audio2 = new Audio('ajto.mov');

//#region debug itt igazából majd tesztelő cuccok lehetnek or idk
function debug1(szam){
    szam = Number(szam);
    changeImage(irodaKOZEP[szam]);
}

//#endregion debug

var kamera = 0;
function changeImage(a) {
    document.getElementById("img").src=a;
};
function changeImage2(a) {
    document.getElementById("hatter").style.backgroundImage = a;
};

function setOffice(){
    var ob = 0;

    if(kamera == 0){
        changeImage(irodaKOZEP);
    }
    else if(kamera == 1){
        ob = lampaOn ? ob+=1:ob+=0;
        ob = doors[1] ? ob+=2:ob+=0;
        
        changeImage(irodaJOBB[ob]);
        changeImage2('url("./images/jobb/freddy.png")');
    }
    else if(kamera == -1){
        ob = lampaOn ? ob+=1:ob+=0;
        ob = doors[0] ? ob+=2:ob+=0;

        changeImage(irodaBAL[ob]);
        changeImage2('url("./images/bal/freddy.png")');
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

function ajto(){
    if(kamera == -1){
        doors[0] = doors[0] ? false:true;
        audio2.play()
    }
    else if(kamera == 1){
        doors[1] = doors[1] ? false:true;
        audio2.play()
    }
    setOffice();
}

function lampa() {
    lampaOn = true;
    if(kamera == -1 || kamera == 1){
        document.getElementById("sotet").style.backgroundColor = "rgba(10, 10, 10, 0)";
        audio.play()
        setOffice();
    }
};
function lampa2() {
    document.getElementById("sotet").style.backgroundColor = "rgba(10, 10, 10, 1)";
        //audio.play()
    lampaOn = false;
    setOffice();
};

//ide majd a jumpscare-k kellenek, mert most csak fel/le teker, de meg kell csinálni, hogy aktív kamerát adjon stb
var audio = new Audio('ajtonalvanacig.mov');
    //audio.play();

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