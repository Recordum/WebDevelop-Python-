const calculater = {
    plus : function (a,b) {return a + b;},
    minus : function (a,b) {return a- b;},
    times : function (a,b) {return a * b;},
    divide : function (a,b) {return a / b},
    power : function (a,b) {return a ** b}
};


const age = parseInt(prompt("How old are you"));
alert(isNaN(age));
alert(calculater.plus(age,100));