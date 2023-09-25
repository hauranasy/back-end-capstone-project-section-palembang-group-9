if (document.getElementById("about.html")) {
    let earth = document.getElementById("bumi");
    let rotation = 0; // Posisi awal rotasi

    function rotateEarth() {
        rotation += 0.5; // Kecepatan rotasi (dalam derajat per frame)
        earth.style.transform = `rotate(${rotation}deg)`; // Mengatur rotasi bola Bumi
        requestAnimationFrame(rotateEarth); // Menggunakan requestAnimationFrame untuk rotasi tanpa jeda
    }

    rotateEarth(); // Memanggil fungsi rotasi pertama kali
}// ini untuk membuat gambar bumi berputar

