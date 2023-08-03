
function Display_time(){

    var date = new Date();
    var hrs = document.querySelector('.hr');
    var mins = document.querySelector('.min');
    var secs = document.querySelector('.sec');
    var meri = document.querySelector('.meri');

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    TwentyFourHour = date.getHours();
    me = "PM";
    
    if(s< 10) { 
        s = 0 + s; 
      }
      if (m < 10) {
        m = 0 + m;
      }
      if (h > 12) {
        h = h - 12;
      }   
      if (h < 10 ) {
        h = 0 + h;
      }   
      if(h==0){ 
        h=12;
      }
      if(TwentyFourHour < 12) {
         me = 'AM';
      }
      
    hrs.innerHTML = h + ":";
    mins.innerHTML = m + ":";
    secs.innerHTML = s;
    meri.innerHTML = me;

}
setInterval(Display_time,10)