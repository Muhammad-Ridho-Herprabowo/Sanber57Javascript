//Define fungsi
function namaFungsi(){
    console.log("Hello!");
}

//Panggil fungsi

function sayHello(nama){
    console.log("Hello, " + nama + " !");
}

function kali(a,b){
    hasilKali = a * b;
    console.log("Hasil Kali a*b = " + hasilKali);
}


module.exports = {namaFungsi, sayHello, kali}