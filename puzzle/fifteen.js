"use stric";

$(function(){

    var emptySquare = { 
        id: "square_4_4",
        left: "300px",
        top: "300px"
    };
    var temp = [];
    var boolean = true;
    init = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");
        var column = 1;
        var row = 1;
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
    
            // set basic style and background
            div.className = "puzzlepiece";
            div.id = "square_" + column + "_" + row;
            row++;
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
            // store x and y for later
            div.x = x;
            div.y = y; 
            
            if(row == 5) {column++; row = 1;}
            var point = {x:x, y:y , bgP:div.style.backgroundPosition, id: div.id};
            temp.push(point);

        }        
    };

    var shuffleArray =function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    var shuffle  = function () {
        var divs =  $("#puzzlearea").children('div');
        emptySquare = { 
            id: "square_4_4",
            left: "300px",
            top: "300px"
        };
        if(boolean == true) {
            actions(); 
            boolean = false;
        }

        $("#puzzlearea").children('div').each(function () {$(this).detach();});
        
        var posshuff = shuffleArray(temp);
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            div.x = posshuff[i].x;
            div.y = posshuff[i].y;
            div.style.left = div.x + 'px';
            div.style.top  = div.y + 'px';
            div.style.backgroundPosition = div.bgP;
            div.id = posshuff[i].id;
            $("#puzzlearea").append(div);
        }
        //APPEND ANOTHER EMPTY PIECE
    };
   
    var actions = function() {

         $("#puzzlearea").children('div').each(function () {
            $(this).click(function () {

                if(leftBoolean($(this)) == true) {
                        changeSquare($(this));
                }
                if(rightBoolean($(this)) == true) {
                        changeSquare($(this));
                 }
            });
        });

        $("#puzzlearea").children('div').each(function () {
            $(this).hover(function () {
                if(leftBoolean($(this)) == true) {
                    $(this).addClass("movablepiece");
                }
                if(rightBoolean($(this)) == true) {
                    $(this).addClass("movablepiece");
                }
            },
            function () {
            $(this).removeClass("movablepiece");
            });
        });
    };


    var leftBoolean = function(div) {
        if(emptySquare.top == div.css("top") && 
        (Math.abs(parseInt(emptySquare.left) - parseInt(div.css("left")))
        == 100)) {
             return true;
         } else {
             return false;
         }
    }

    var rightBoolean = function(div) {
        if(emptySquare.left == div.css("left") && 
        (Math.abs(parseInt(emptySquare.top) - parseInt(div.css("top")))
         == 100)) {
             return true;
         } else {
             return false;
         }
    }

     var changeSquare = function (div) {
        const id = emptySquare.id;
        const left = emptySquare.left;
        const top = emptySquare.top;
        emptySquare.id = div.attr('id');
        emptySquare.left = div.css("left");
        emptySquare.top = div.css("top");
        div.attr('id', id);
        div.css("left", left);
        div.css("top", top);
     }

    $(document).ready(function() {
        init();
        $("#shufflebutton").click(shuffle);
    });
});