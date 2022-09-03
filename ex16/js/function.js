function update() {
    function currentTime() {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes(); 
        seconds = date.getSeconds(); 
        if (hours<10) { 
            hours = "0" + hours;
        }
        
        if (minutes < 10) { 
            minutes = "0" + minutes;
        }
    
        if (seconds < 10) {
            seconds= "0" + seconds;
        }
    
        clock = hours + " : " + minutes + " : " + seconds;	
        return clock;
    }
    
    currentTime = currentTime();
    reloj = document.getElementById("clock");
    reloj.innerHTML = currentTime; 
}
setInterval(update, 1000); 