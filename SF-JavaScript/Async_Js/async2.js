function showTime(){
    const element = document.getElementById("mydiv");
    const mydate = new Date();
    let message = `${mydate.getHours()}:${mydate.getMinutes()}:${mydate.getSeconds()}`;
    element.innerHTML = message;
}

setInterval(showTime, 1000);