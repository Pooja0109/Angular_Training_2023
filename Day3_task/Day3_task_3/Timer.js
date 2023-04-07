function display_timer()
{   
    hour=min=sec=0
    document.getElementById("timer").innerHTML="0"+hour+":"+min+":"+sec;

    setInterval(function()
    {
        sec+=1;
        if(sec>59)
        {
            sec=0;
            min+=1;
        }
        if(min>59)
        {
            min=0;
            hour+=1;
        }

        if(sec<10 && min<10)
            document.getElementById("timer").innerHTML="0"+hour+"&nbsp;:&nbsp;"+"0"+min+"&nbsp;:&nbsp;"+"0"+sec;
        else
        {
            if(sec<10)
            document.getElementById("timer").innerHTML="0"+hour+"&nbsp;:&nbsp;"+min+"&nbsp;:&nbsp;"+"0"+sec;
            if(min<10)
            document.getElementById("timer").innerHTML="0"+hour+"&nbsp;:&nbsp;"+"0"+min+"&nbsp;:&nbsp;"+sec;
        }
       
    },1000)
}
