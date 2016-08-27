(function(){

"use strict";

if (navigator.platform !== 'MacIntel') {
    console.error('Error: Your platform (%s) is not compatible with "Scroll Like Safari" extension. It only supports Chrome on macOS.', navigator.platform);
    return;
}

const keyCodes = {
    A: 65,
    E: 69,
    N: 78,
    P: 80
};

const minScrollLength = 36;
let doingTextInput = false;

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

    if (doingTextInput) {
        return;
    }
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

document.addEventListener('focus', function(e) {
    if (targetIsInputtingElement(e)) {
        doingTextInput = true;
    }
}, true);
document.addEventListener('blur', function(e) {
    if (targetIsInputtingElement(e)) {
        doingTextInput = false;
    }
}, true);

function targetIsInputtingElement(event) {
    const noScrollTag = ['textarea', 'input'];
    return noScrollTag.indexOf(event.target.tagName.toLowerCase()) >= 0 || event.target.getAttribute('contenteditable');
}

})();
