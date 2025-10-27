const form = document.getElementById('formUser');
const hasil = document.getElementById('hasil');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const nama = document.getElementById('nama').value;
const email = document.getElementById('email').value;
const pesan = document.getElementById('pesan').value;

const dataUser = {nama, email, pesan};
localStorage.setItem('dataUser', JSON.stringify(dataUser));

tampilkanData();
}
);

function tampilkanData() {
    const data = localStorage.getItem(dataUser);
    if (data) {
        const user = JSON.parse(data);
        hasil.innerHTML = `
        <h3> Data Tersimpan: </h3>
        <p><strong>Nama:</strong> ${user.nama}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Pesan:</strong> ${user.pesan}</p>
    `;
    }
}
window.onload = tampilkanData;