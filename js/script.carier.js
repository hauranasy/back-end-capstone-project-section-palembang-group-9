 // Ambil elemen teks
 const changingText = document.getElementById('textbersinar');

 // Fungsi untuk mengubah warna
 function changeColor() {
   const currentColor = changingText.style.color;
   const newColor = currentColor === 'orangered' ? 'red' : 'orangered';
   changingText.style.color = newColor;
 }

 // Atur interval untuk mengubah warna setiap 1000 milidetik (1 detik)
 setInterval(changeColor, 1000);