//  alert('Hello, World!');

var timer = null;
var newSize = null;
window.onload = function() {
var bigButton = document.getElementById("bigbutton");
bigButton.onclick = function() {
//    document.getElementById("textarea").style.fontSize = "24pt";
//    Exercise of page 7
       if (timer === null) {
           timer = setInterval(() => { 
               if (newSize == null) {
                    newSize = parseFloat(getComputedStyle(document.getElementById("texta")).fontSize); 
                    newSize *= 0.75;
                }
               newSize += 2;
               document.getElementById("texta").style.fontSize = newSize + "pt";
               console.log("After Udated " + document.getElementById("texta").style.fontSize);}, 500);
       } else {
          clearInterval(timer);
          timer = null;
          document.getElementById("texta").style.fontSize = "12pt";
       }
};
};

function bling() {
//    alert('wArning!!!');
    if(document.getElementById("checkb").checked === true) {
        document.getElementById("texta").style.fontWeight = "bold";
        document.getElementById("texta").style.color = "green";
        document.getElementById("texta").style.textDecoration = "underline";
    } else {
     document.getElementById("texta").style.fontWeight = "normal";
     document.getElementById("texta").style.color = "black";
     document.getElementById("texta").style.textDecoration = "none";
    }
}

function malkovich(){
    let str = document.getElementById("texta").value;
    words = str.split(" ");
    console.log(words);
    for(let i=0; i<words.length; i++){
        if(words[i].length>=5) words[i] = "Malkovich";
    }
    str = "";
    for(let i=0; i<words.length; i++){
        str += words[i];
        if(i!=words.length-1) str += " ";
    }
    document.getElementById("texta").value = str;
}
