(function(){

"use strict";

const keyCodes = {
    A: 65,
    E: 69,
    N: 78,
    P: 80
};

const minScrollLength = 36;

let scrollInterval;

let smoothScrollSafari = function(offset, travelTime) {

    clearInterval(scrollInterval);

    let current = window.pageYOffset,
        timeForNext = 10,
        next,
        percentage;

    var timeLapsed = 0;
    scrollInterval = setInterval(function(){

        timeLapsed += timeForNext;
        percentage = timeLapsed / travelTime;
        next = offset * percentage;
        window.scroll(0, current + next);
        if (percentage >= 1) {
            clearInterval(scrollInterval);
        }
    }, timeForNext);
};

document.addEventListener('keydown', function(e) {

    if (e.ctrlKey) {
        switch (e.keyCode) {
            case keyCodes.E:
                smoothScrollSafari(window.innerHeight, 100);
                break;
            case keyCodes.A:
                smoothScrollSafari(-window.innerHeight, 100);
                break;
            case keyCodes.N:
                smoothScrollSafari(minScrollLength, 30);
                break;
            case keyCodes.P:
                smoothScrollSafari(-minScrollLength, 30);
                break;
        }
    }
});

})();
