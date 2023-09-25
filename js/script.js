if (window.location.href.indexOf("index.html") !== -1) {
    alert('WELCOME!');
  }//ini untuk home page
  
if (window.location.href.indexOf("login.html") !== -1) {
    alert('Silakan Login Terlebih Dahulu!');
  }//ini untuk login

  //ini adalah script untuk f&q
  const questions = document.querySelectorAll('.question');
    
  questions.forEach(question => {
      question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          const toggle = question.querySelector('.toggle');
          answer.classList.toggle('show');
          toggle.textContent = answer.classList.contains('show') ? '-' : '+';
      });
  });  
  //ini untuk perubahan di tombol get startet
var button = document.getElementById("GETSTARTED");

button.addEventListener("mouseover", function() {
    button.innerHTML = "Klik di Sini";
});//ketika kursor disentuh maka tampilannya berubah

button.addEventListener("mouseout", function() {
    button.innerHTML = "Get Started";
});

const duration = 15 * 1000,//ini merupakan event untuk bagian home pagenya
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);

