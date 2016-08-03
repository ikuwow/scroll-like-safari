(function(){

"use strict";

let keyCodes = {
    A: 65,
    E: 69,
    N: 78,
    P: 80
};

let minScrollLength = 36;

document.addEventListener('keydown', function(e) {

    var scrollDestination;

    if (e.ctrlKey) {
        if (e.keyCode == keyCodes.A) {
            scrollDestination = window.pageYOffset - window.innerHeight;
            window.scroll(0, scrollDestination);
        }
        if (e.keyCode == keyCodes.E) {
            scrollDestination = window.pageYOffset + window.innerHeight;
            window.scroll(0, scrollDestination);
        }
        if (e.keyCode == keyCodes.N) {
            scrollDestination = window.pageYOffset + minScrollLength;
            window.scroll(0, scrollDestination);
        }
        if (e.keyCode == keyCodes.P) {
            scrollDestination = window.pageYOffset - minScrollLength;
            window.scroll(0, scrollDestination);
        }
    }
});

})();
