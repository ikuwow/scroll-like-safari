(function(){

"use strict";

const keyCodes = {
    A: 65,
    E: 69,
    N: 78,
    P: 80
};

const minScrollLength = 36;

document.addEventListener('keydown', function(e) {

    let scrollDestination;

    if (e.ctrlKey) {
        switch (e.keyCode) {
            case keyCodes.A:
                scrollDestination = window.pageYOffset - window.innerHeight;
                window.scroll(0, scrollDestination);
                break;
            case keyCodes.E:
                scrollDestination = window.pageYOffset + window.innerHeight;
                window.scroll(0, scrollDestination);
                break;
            case keyCodes.N:
                scrollDestination = window.pageYOffset + minScrollLength;
                window.scroll(0, scrollDestination);
                break;
            case keyCodes.P:
                scrollDestination = window.pageYOffset - minScrollLength;
                window.scroll(0, scrollDestination);
                break;
        }
    }
});

})();
