var audio = document.getElementById('audio');
var index = 1;

    function playSpecificMedia(specificElement){
    	if(specificElement == 0 && index == 1){
    		playMedia();
    	}else{
    		document.getElementById("id"+index).style.background = "";
	    	index = specificElement;
	    	var event = new Event('ended');
	    	audio.dispatchEvent(event);
	    }	
    }

    audio.addEventListener("ended", function() {
    	//this checking is for when user came through some element and clicked on first element 
    	if(index != 0){				
        	document.getElementById("id"+index).style.background = "";
    	}
        index = (index + 1) % 27;
        if(index == 0){
            index=1;
            $('html, body').animate({ scrollTop: $("#id"+index).offset().top }, 'slow');
        }else{
            $('html, body').animate({ scrollTop: $("#id"+index).offset().top }, 'slow'); 
            playMedia();
        }
    });

    $("#wishes").on("click",function(){
        playMedia();
    });
    
    function playMedia(){
        document.getElementById("id"+index).style.background = "rgb(67, 183, 248)";
        audio.src = "audio/" + index + ".wav";
        audio.play();
    }