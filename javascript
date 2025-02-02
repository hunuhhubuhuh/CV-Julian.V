// Éléments du DOM
const startScreen = document.getElementById('start-screen');
const cvScreen = document.getElementById('cv-screen');
const startBtn = document.getElementById('start-btn');
const mario = document.getElementById('mario');

// Fonction pour démarrer le CV
startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  cvScreen.style.display = 'block';
  moveMario(); // Animation de Mario
});

// Fonction pour faire bouger Mario (effet simple)
function moveMario() {
  let position = 0;
  const interval = setInterval(() => {
    position += 5;
    mario.style.transform = `translateX(${position}px)`;

    if (position > window.innerWidth) { // Mario sort de l'écran
      clearInterval(interval);
    }
  }, 100);
}

// Ajoute un bruit lorsque l'utilisateur clique sur les boutons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const coinSound = new Audio('assets/coin-sound.mp3');
    coinSound.play();
  });
});
