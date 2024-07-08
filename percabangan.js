const prompt = require('prompt-sync')({ sigint: true});

const password = prompt('enter password: ');
const validPassword = 'password'

//perbandingan password (String) vs validPassword (String)
if (password === validPassword) {
    //jika benar
    console.log('Login successful');
} 
else {
    //jika salah
    console.log('Login failed');
}
//print ini apapun yang terjadi
console.log('Terimakasih telah menggunakan aplikasi!');