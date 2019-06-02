
var textarea=document.getElementById("para")
function fontWeight() {
    if(textarea.style.fontWeight!="bold")
    {
        textarea.style.fontWeight="bold"
    }
    else{
        textarea.style.fontWeight="normal"
    }
}

var textarea=document.getElementById("para")
function  fontstyle() {
    if(textarea.style.fontStyle!="italic")
    {
        textarea.style.fontStyle="italic"
    }
    else{
        textarea.style.fontStyle="normal"
    }
}
var textarea=document.getElementById("para")
function  underline() {
    if(textarea.style.textDecoration!="underline")
    {
        textarea.style.textDecoration="underline"
    }
    else{
        textarea.style.textDecoration="none"
    }
}

var textarea=document.getElementById("para")
function  fontFamily(valeur) {
    textarea.style.fontFamily=valeur.value;

}
var textarea=document.getElementById("para")
function  fontSize(valeur) {
    textarea.style.fontSize=valeur.value;
}
