// Random colors // 
var r=Math.floor(Math.random()*255);
var g=Math.floor(Math.random()*255);
var b=Math.floor(Math.random()*255);

var x = Math.floor(Math.random()*3)
var colorArray = ["rgb("+r+", "+g+", "+b+")", "rgb("+g+", "+r+", "+b+")", "rgb("+b+", "+r+", "+g+") "];
// Get elements //
document.getElementById("thumbsup").style.display = 'none';
document.getElementById("thumbsdown").style.display = 'none';
thumbsdown.style.height = "170px";

// Boxes //

var rightCount = document.getElementById("antall-riktig");
var wrongCount = document.getElementById("antall-feil");
var correctCount = 0;
var failCount = 0;


var colorOutputP = document.getElementById("color-output-p");
    colorOutputP.style.backgroundColor = (colorArray[x]);
    colorOutputP.style.height = "150px";
    colorOutputP.style.width = "150px";
    colorOutputP.style.margin = "5px";

var color1 = document.getElementById("color1");
    color1.style.height = "120px";
    color1.style.width = "120px";
    color1.style.margin = "5px";
    color1.style.float = "left";
    color1.onclick = rightOrWrong1;

var color2 = document.getElementById("color2");
    color2.style.height = "120px";
    color2.style.width = "120px";
    color2.style.margin = "5px";
    color2.style.float = "left";
    color2.onclick = rightOrWrong2;

var color3 = document.getElementById("color3");
    color3.style.height = "120px";
    color3.style.width = "120px";
    color3.style.margin = "5px";
    color3.style.float = "left";
    color3.onclick = rightOrWrong3;
    
// Funksjoner //
function showDivColor(){
    var backgroundColor = this.style.backgroundColor;
    colorOutputP.innerHTML = backgroundColor;
}
    color1.style.backgroundColor=(colorArray[0]);
    color2.style.backgroundColor=(colorArray[1]);
    color3.style.backgroundColor=(colorArray[2]);    

function rightOrWrong1(){
    if (colorArray[0] == colorArray[x]) {
        document.getElementById("svar").innerHTML = "Riktig svar. Tommel opp!";
        thumbsup.style.display = "block";
        thumbsdown.style.display = "none";
        correctCount = correctCount +1;
        rightCount.innerHTML = correctCount;
    }
    else {
        document.getElementById("svar").innerHTML = "Dessverre feil svar. Prøv igjen!";
        thumbsup.style.display = "none";
        thumbsdown.style.display = "block";
        failCount = failCount +1;
        wrongCount.innerHTML = failCount;
    }
}

function rightOrWrong2(){
    if (colorArray[1] == colorArray[x]) {
        document.getElementById("svar").innerHTML = "Riktig svar. Tommel opp!";
        thumbsup.style.display = "block";
        thumbsdown.style.display = "none";
        correctCount = correctCount +1;
        rightCount.innerHTML = correctCount;
    }
    else {
        document.getElementById("svar").innerHTML = "Dessverre feil svar. Prøv igjen!";
        thumbsup.style.display = "none";
        thumbsdown.style.display = "block";
        failCount = failCount +1;
        wrongCount.innerHTML = failCount;
    }
}

function rightOrWrong3(){
    if (colorArray[2] == colorArray[x]) {
        document.getElementById("svar").innerHTML = "Riktig svar. Tommel opp!";
        thumbsup.style.display = "block";
        thumbsdown.style.display = "none";
        correctCount = correctCount +1;
        rightCount.innerHTML = correctCount;
    }
    else {
        document.getElementById("svar").innerHTML = "Dessverre feil svar. Prøv igjen!";
        thumbsup.style.display = "none";
        thumbsdown.style.display = "block";
        failCount = failCount +1;
        wrongCount.innerHTML = failCount;
    }
}

