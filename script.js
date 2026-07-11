let z = 1;

let dragWindow = null;
let offsetX = 0;
let offsetY = 0;



function updateClock(){

    document.getElementById("clock").innerHTML =
    new Date().toLocaleString();

}

setInterval(updateClock,1000);
updateClock();





function openApp(app){

    let win = document.getElementById(app);

    win.style.display = "block";

    z++;
    win.style.zIndex = z;


    if(!win.dataset.open){

        win.style.left =
        Math.random()*300 + 100 + "px";

        win.style.top =
        Math.random()*200 + 100 + "px";

        win.dataset.open = true;

    }

}



function closeApp(app){

    document.getElementById(app).style.display = "none";

}





document.querySelectorAll(".window").forEach(win=>{


    win.addEventListener("mousedown",()=>{

        z++;

        win.style.zIndex = z;

    });



    let title = win.querySelector(".title");


    title.addEventListener("mousedown",e=>{

        dragWindow = win;

        offsetX =
        e.clientX - win.offsetLeft;

        offsetY =
        e.clientY - win.offsetTop;


    });


});



document.addEventListener("mousemove",e=>{


    if(dragWindow){

        dragWindow.style.left =
        e.clientX - offsetX + "px";


        dragWindow.style.top =
        e.clientY - offsetY + "px";

    }


});



document.addEventListener("mouseup",()=>{

    dragWindow = null;

});






let stopwatch = 0;
let stopwatchRun;



function formatTime(t){

    let h = Math.floor(t/3600);

    let m = Math.floor((t%3600)/60);

    let s = t%60;


    return String(h).padStart(2,"0")
    + ":"
    + String(m).padStart(2,"0")
    + ":"
    + String(s).padStart(2,"0");

}



function startStopwatch(){

    if(stopwatchRun) return;


    stopwatchRun = setInterval(()=>{

        stopwatch++;

        document.getElementById("stopwatchDisplay")
        .innerHTML = formatTime(stopwatch);


    },1000);

}



function stopStopwatch(){

    clearInterval(stopwatchRun);

    stopwatchRun = null;

}



function resetStopwatch(){

    stopStopwatch();

    stopwatch = 0;

    document.getElementById("stopwatchDisplay")
    .innerHTML = "00:00:00";

}






let timer;
let timerRun;



function startTimer(){

    if(timerRun) return;


    if(timer === undefined){

        timer =
        Number(document.getElementById("timerInput").value);

    }


    timerRun = setInterval(()=>{


        if(timer <= 0){

            clearInterval(timerRun);

            timerRun = null;

            alert("Timer finished!");

            timer = undefined;

            return;

        }


        timer--;


        document.getElementById("timerDisplay")
        .innerHTML = timer;


    },1000);


}




function resetTimer(){

    clearInterval(timerRun);

    timerRun = null;

    timer = undefined;


    document.getElementById("timerDisplay")
    .innerHTML = "0";

}