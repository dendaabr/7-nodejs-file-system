const contacts = require('./contacts')
const main = async () => {
    const nama = await contacts.pertanyaan('Masukan nama anda ; ');
    const email = await contacts.pertanyaan('Masukan email anda ; ');
    const noHp = await contacts.pertanyaan('Masukan noHP anda ; ');

    contacts.simpanContacts(nama, email, noHp);
};
main();