const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
// console.log(fs);

// try{
// fs.writeFileSync('data/test.txt', 'Hello Word'); // menulis string ke file synchronous
// } catch (e) {
//     console.log(e);
// }

// asynchronouse
// fs.writeFileSync('data/test.txt','Hello World secara asynchronous', (e) => {
//     console.log(e)
// });

// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString());

// fs.readFile('datas/test.txt', 'utf-8',(err, data) =>
// {
//     if (err) throw err;
//     console.log(data); 
// });

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data jika belum ada
const diPatch = './data';
if (!fs.existsSync(diPatch)) {
    fs.mkdirSync(diPatch);
}

//membuat file contacts.json jika belum ada
const dataPatch = './data/contacts.json';
if (!fs.existsSync(dataPatch)) {
    fs.writeFileSync(dataPatch, '[]', 'utf-8');
}

// //callback
// rl.question('Masukan nama anda : ', (nama) => {
//     rl.question('Masukan nomor HP anda : ', (noHp) => {
//         rl.question('Masukan email anda : ', (email) => {
//             const contact = { nama, noHp, email };
//             const file = fs.readFileSync('data/contacts.json', 'utf-8');
//             const contacts = JSON.parse(file);

//             contacts.push(contact);
//             fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//             console.log('terima kasih');
//             rl.close();
//         });
//     });
// });

// async await 
const pertanyaan = (tulisPertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(tulisPertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContacts = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    const filebuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(filebuffer);

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    rl.close();

};

module.exports = { pertanyaan, simpanContacts };