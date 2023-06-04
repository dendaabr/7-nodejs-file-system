const fs = require('fs');
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

rl.question('Masukan nama anda : ', (nama) => {
    rl.question('Masukan nomor HP anda : ', (noHp) => {
        const contact = { nama, noHp };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('terima kasih');
        rl.close();
    });
});