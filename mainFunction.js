//import fungsi dari file lain
const { namaFungsi, sayHello, kali } = require("./fungsi");
const { car } = require("./property");

//memanggil fungsi yang sudah diimport
namaFungsi()

sayHello("Ridho")

kali(1,2)

//import object & access object
console.log(car.type)
car.stop("Model 3")
car.stop(car.type)
car.start()

