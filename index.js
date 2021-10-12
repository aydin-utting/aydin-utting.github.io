document.getElementById("TITLE").innerHTML = "Aydin's Page"
const start = Date.now();
function stopwatch() {
    setTimeout(stopwatch,10);
    const end = Date.now();
    const ellapsed = end-start;
    const hours = Math.floor(ellapsed/3.6e+6)
    const minutes = Math.floor((ellapsed%3.6e+6)/60000)
    const seconds = Math.floor((ellapsed%60000)/1000)
    const milliseconds = ellapsed%1000
    document.getElementById("timer-display").innerHTML = _.padStart(hours,2,'0')+
    ':'+_.padStart(minutes,2,'0')+
    ':'+_.padStart(seconds,2,'0')+
    '.'+_.padEnd(milliseconds,3,'0');

}