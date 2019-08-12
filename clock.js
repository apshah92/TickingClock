function showclock() {
    var element = document.getElementById("clock-container");
    var date = new Date();
    
    var hours = date.getHours();
    if ( (hours < 12) || (hours > 12) ){
        hours = (hours % 12) < 10 ? "0" + hours%12 : hours%12;      

    }
    
    var minutes = date.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    
    var seconds = date.getSeconds();
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    var time =  hours+":"+minutes+":"+seconds;
    element.innerHTML = "<h2>"+time+"</h2>";
}


setInterval(showclock,1000);