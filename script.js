const dayelement = document.getElementById('days')
const hourselement = document.getElementById('hours')
const minuteselement = document.getElementById('mins')
let secondelement = document.getElementById("secs");


const newyear = "1 jan 2022";

function countdown(){
    const newyearsdate = new Date(newyear);
    const currentdate = new Date()
    const seconds = (newyearsdate-currentdate)/1000;
    const days= Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%60
    const second = Math.floor(seconds%60)
    // console.log(days ,hours,minutes,seconds);


    dayelement.innerHTML = formatTime(days);
    hourselement.innerHTML = formatTime(hours);
    minuteselement.innerHTML = formatTime(minutes);
    secondelement.innerHTML = formatTime(second);

   

    
  
  

}
// zero add
function formatTime(time){
    if (time<10) {
       return (0+[time])
        
    } else {
        return [time]
    }
}
// Stopping the count

function stopcount(){
    clearInterval (countdown());
}
const newyearsdate = new Date(newyear);
    const currentdate = new Date()
    const seconds = (newyearsdate-currentdate);
if (seconds<1){
    stopcount()
}

countdown();
setInterval(countdown,1000);
