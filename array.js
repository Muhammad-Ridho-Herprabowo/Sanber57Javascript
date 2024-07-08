var motor = ["Suzuki", "Yamaha", "Honda"];

console.log(motor[1])
console.log(motor)

motor.push("Ducati")

for(let i=0; i<motor.length; i++){
    console.log('cetak motor ke- ' + i + ":" + motor[i]); 
}

//masih ada fungsi delete 