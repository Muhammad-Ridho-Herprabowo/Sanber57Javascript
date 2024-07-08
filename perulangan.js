const prompt = require('prompt-sync')({sigint: true});

for(let i = 0; i < 10; i++){
    let number = i + 1
    console.log("perulangan ke-" + number);
}

var ulangi = prompt("are you ready? "); //input 1
console.log("start"); 
var counter = 0;

while(ulangi){
    var jawab = prompt("Apakah anda mau mengulang? (yes/no) : ")
    counter++;
    if(jawab == false || jawab == "no"){
        ulangi = false; 
    }
    console.log("perulangan ke-" + counter);
}