var textWrapper = document.querySelector('.judul .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.judul .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.love .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.love',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  document.addEventListener("DOMContentLoaded", function() {
    const changingText = document.getElementById('tips1');

    // Fungsi untuk mengubah warna
    function changeColor() {
        const currentColor = changingText.style.color;
        const newColor = currentColor === 'white' ? 'yellow' : 'white';
        changingText.style.color = newColor;
    }

    // Atur interval untuk mengubah warna setiap 1000 milidetik (1 detik)
    setInterval(changeColor, 1000);
});

   