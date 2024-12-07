let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn =document.getElementById('stopbtn');
let startbtn =document.getElementById('startbtn');
let resetbtn =document.getElementById('resetbtn');


let msec = 0o0;
let secs = 0o0;
let min = 0o0;

let timerId =null;

 startbtn.addEventListener('click',function(){
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId = setInterval(StartTimer,10);
 });
 stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
    
 });
 resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    secs = min = msec =0o0;
    
 });
function StartTimer(){
    msec++;
    if(msec ==100){
        msec=0;
        secs++;
        if(secs == 60){
            secs=0;
            min++;
        }
    }
  let msecString =msec < 10 ? `0${msec}`:msec;
  let secscString =secs < 10 ? `0${secs}`:secs;
  let mincString =min < 10 ? `0${min}`:min;

  timerdisplay.innerHTML = `${mincString} : ${secscString} : ${msecString}`
//    if(msec < 10){
//     msecString = `0${msec}`;
//    }
//    else{
//     msecString =msec;
//    }
}