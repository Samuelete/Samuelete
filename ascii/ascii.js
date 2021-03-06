// "use strict";

window.onload = function() {

    //GLOBAL VARIABLES FOR THIS PROJECT
    var timer = null;
    var speed = 250;
    var frames = null;

    //START BUTTON FUNCTIONS
    document.getElementById("start").onclick = function() {

        function start() {
            document.getElementById("start").disabled = true;
            document.getElementById("a-box").disabled = true;
            document.getElementById("stop").disabled = false;
        }

        function set(framing, index) {
            timer = setInterval(function(){ 
                document.getElementById("ta").value = framing[index];
                index++;
                if (index === framing.length) { index = 0; }
            }, speed);
        }
        frames = document.getElementById("ta").value;
        start();
        set(frames.split("=====\n"), 0)

    }

    //STOP BUTTON FUNCTIONS
    document.getElementById("stop").onclick = function() {

        function stop() {
            document.getElementById("start").disabled = false;
            document.getElementById("a-box").disabled = false;
            document.getElementById("stop").disabled = true;
            clearInterval(timer);
            timer = null;
        }
        document.getElementById("ta").value = frames;
        stop();
    }

    //ANIMATION ON TEXT AREA
    document.getElementById("a-box").onchange = function() {
        document.getElementById("ta").value = ANIMATIONS[document.getElementById("a-box").value];
    }

    //SIZE ON TEXT AREA
    document.getElementById("s-box").onchange = function() {
        document.getElementById("ta").style.fontSize = document.getElementById("s-box").value;
    }

    //TURBO CHECK BOX
    document.getElementById("turbo").onchange = function() {
        document.getElementById("turbo").checked == true ? speed = 50 : speed = 250;
    }

}