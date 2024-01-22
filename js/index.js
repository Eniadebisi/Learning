
var changingWordSet = ["page", "test space","resume","website"]
var changingWordIndex = 0


async function changeWord() {
    document.getElementById("changing").style.opacity = 0;
    setTimeout(function () {
        document.getElementById("changing").innerHTML = changingWordSet[changingWordIndex];
        document.getElementById("changing").style.opacity = 1;
    }, 300)
    changingWordIndex = (changingWordIndex+1) % changingWordSet.length;


}


setInterval(changeWord, 2500);