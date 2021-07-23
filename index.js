const txt1 = "ethan eldridge";
const txt2 = "a master's student in computer science"; /* The text */
const txt3 = "a pre-medical student";
const txt4 = "an indiana hoosier";
const txt5 = "a HUGE fan of movies";
const txt6 = "a kick-a** cook";
const phrases = [txt1, txt2, txt3, txt4, txt5, txt6];
let p = 0
var i = 0;
var speed = 100; /* The speed/duration of the effect in milliseconds */

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}

function write(txt) {
    console.log("Writing")
    if (i < txt.length) {
        document.getElementById("picText").innerHTML = "<span id='greeting'>hi, i'm </span>" + txt.slice(0, i+1) + "<span class='blink'>|</span>";
        i++;
        setTimeout(function() {write(txt);}, speed);
    }
}
function remove(txt) {
    console.log("Removing")
    if (i >= 0) {
        i--;
        document.getElementById("picText").innerHTML = "<span id='greeting'>hi, i'm </span>" + txt.slice(0, i+1) + "<span class='blink'>|</span>";
        setTimeout(function() {remove(txt);}, speed);
    }
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}

function writeRemove(){
    let phrase = phrases[p%phrases.length]
    console.log(phrase);
    write(phrase);
    sleep(5000).then(() => { remove(phrase); });  
    p+=1 
    setInterval(function(){
        let phrase = phrases[p%phrases.length]
        console.log(phrase);
        write(phrase);
        sleep(5000).then(() => { remove(phrase); });  
        p+=1 
    }, 10000)
}
