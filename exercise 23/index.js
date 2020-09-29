let hour= prompt('enter the current hours');
if(hour<0 || hour> 23)
alert('input is incorrect');
if( hour< 8 || hour >= 18)
alert ('hour is outside of the office hours');
if( hour>= 8 && hour< 18)
alert('we are open');