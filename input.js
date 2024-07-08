//melakukan import ke aplikasi yang ingin dijalankan
const prompt = require('prompt-sync')({signit: true});

//Input data first number -> const (var) num1
const num1 = prompt('enter a first number: ');

//Input data second number -> const (var) num2
const num2 = prompt('enter a second number: ');

//print informasi 
console.log('first number: +  second number:  =');

//perhitungan penjumlahan
//convert ke number/float/integer untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));