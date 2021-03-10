var count=-1;
var stoppermission=false;
var pausepermission=-1;
var hour=0;
var min=0;
var sec=0;
var startpermission=false;
var show_hour="";
var show_min="";
var show_sec="";
var stopWatch="0"+hour+":"+"0"+min+":"+"0"+sec;

var para=document.getElementById("para");
var swatch=document.createElement("p");
var textnode=document.createTextNode(stopWatch);
swatch.appendChild(textnode);
document.body.insertBefore(swatch,para);

var startButton=document.getElementById("start");
var pauseButton=document.getElementById("pause");
var stopButton=document.getElementById("stop");
pauseButton.disabled=true;
stopButton.disabled=true;

function showHMS()
{

  if(stoppermission==true)
  {
      sec=0;
      min=0;
      hour=0;
      show_sec="0"+sec;
      show_min="0"+min;
      show_hour="0"+hour;
  }

  else
  {
    if(sec<=9)
     show_sec="0"+sec;
    else
     show_sec=""+sec;

    if(min<=9)
      show_min="0"+min;
    else
      show_min=""+min;

    if(hour<=9)
      show_hour="0"+hour;

    else
      show_hour=""+hour;
  }

    swatch.innerHTML=show_hour+":"+show_min+":"+show_sec;
    
}

function fun()
{
   if(startpermission==true && pausepermission==false)
     {
       sec=sec+1;
       if(sec==60)
         {
           min=min+1;
           sec=0;
         }
        
        if(min==60)
         {
           hour=hour+1;
           min=0;
         }

          showHMS();
      }
    else
      showHMS();
}

function start()
{
    startpermission=true;
    pausepermission=false;
    stoppermission=false;
    startButton.disabled=true;
    pauseButton.disabled=false;
    stopButton.disabled=false;
    if(count==-1)
    {
      count=0;
      setInterval(fun,1000);
    }
 
}

function pause()
{
   if(pauseButton.innerHTML=="continue")
   {
     startpermission=true;
     pausepermission=false;
     pauseButton.innerHTML="pause";
   }
   else
   {
   startpermission=false;
   pausepermission=true;
   pauseButton.innerHTML="continue";
   }
   fun();
}

function stop()
{
  
  pauseButton.innerHTML="pause";
  stoppermission=true;
  pauseButton.disabled=true;
  startButton.disabled=false;
  stopButton.disabled=true;
  showHMS();
}