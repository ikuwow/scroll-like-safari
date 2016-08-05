(function(){

"use strict";

const keyCodes = {
    A: 65,
    E: 69,
    N: 78,
    P: 80
};

const minScrollLength = 36;

let scrollSafari = function(offset) {
    let scrollDestination = window.pageYOffset + offset;
    window.scroll(0, scrollDestination);
};

document.addEventListener('keydown', function(e) {

    if (e.ctrlKey) {
        switch (e.keyCode) {
            case keyCodes.E:
                scrollSafari(window.innerHeight);
                break;
            case keyCodes.A:
                scrollSafari(-window.innerHeight);
                break;
            case keyCodes.N:
                scrollSafari(minScrollLength);
                break;
            case keyCodes.P:
                scrollSafari(-minScrollLength);
                break;
        }
    }
});

})();
