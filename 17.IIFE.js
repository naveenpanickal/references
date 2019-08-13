
/////////////////////////////
// IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {/* when we type anonyms func inside parenthesis it tricks javascript engine into thinking that it is an expression rather than a declaration */
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


/* We create IIFE if we need a scope hidden from the outside scope (hiddn variables etc) */ 
