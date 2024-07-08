//Devine object (JSON)
var car = {
    //properti
    type: "Tesla",
    model: "Model S",
    year: 2021,
    color: "Red",

    //method
    start: function(){
        console.log("ini method start ");
    },
    drive: function(){
        console.log("ini method drive ");
    },
    brake: function(){
        console.log("ini method brake ");
    },
    //function/method dengan param
    stop: function(namaMobil){
        console.log("ini method stop " + namaMobil );
    }
};

exports.car = car;