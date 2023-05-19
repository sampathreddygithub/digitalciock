function clk()
{
var date=new Date()
var  hh=date.getUTCHours()
var  mm=date.getMinutes()
var  ss=date.getSeconds()
var  dd=date.getDate()
var  mo=date.getMonth()
var  yy=date.getFullYear()
var  dy=date.getDay()
var am_pm="AM"
if(hh>=12)
{
    am_pm="Pm"
    if(hh>=13)
    {
        hh-=12;
    }
}
if(hh==0)
{
    hh=12;
}
var fulltime=`${hh}:${mm} ${am-pm}`
document.getElementById("Time").innerHTML=fulltime
document.getElementById("sec").innerHTML=ss
if(mo==0)
{
   mo="jan"
}
else if(mm=1)
{
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2){
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 else if(mo==2)
 {
    mo="jan"
 }
 var fullDate=`${dd}/${mo}/${yy}`
 var bdy=document.querySelector("body")
document.getElementById("Date").innerHTML=fullDate
switch(dy)
{
    case 0:dy="sunday"
    bdy.style.backgroundImage="url()"
    break;  
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
    case 1:dy="monday"
    bdy.style.backgroundImage="url()"

    break;
}
document.getElementById("Day").innerHTML=dy
 setTimeout(clk,1000);
}
function great()
{
   time=date.getHours()
   (time>=5&&time<=12)
   {
       document.getElementById("message").innerHTML="Good morn!!!"
       document.getElementById("vid").src=""
       document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57)"
       document.getElementById("Time").style.color="black"
       document.getElementById("Date").style.color="darkblue"
       document.getElementById("Day").style.color="darkblue"
       document.getElementById("sec").style.color="white"
   }
   else if(time>=12 && time<16)
   {
        document.getElementById("message").innerHTML="Good Evening!!!"
        document.getElementById("vid").src=""

        document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("sec ").style.color="black"
   }
}

