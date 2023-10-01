
// Atur interval untuk mengubah warna setiap 1000 milidetik (1 detik)
var textWrapper = document.querySelector('#tips');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '#tips .letter',
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
        })
        .add({
            targets: '#tips .letter',
            translateY: [0, -100],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i
        });
        const changingText = document.getElementById('textbersinar');

        // Fungsi untuk mengubah warna
        function changeColor() {
          const currentColor = changingText.style.color;
          const newColor = currentColor === 'orangered' ? 'red' : 'orangered';
          changingText.style.color = newColor;
        }
       
        // Atur interval untuk mengubah warna setiap 1000 milidetik (1 detik)
        setInterval(changeColor, 1000);