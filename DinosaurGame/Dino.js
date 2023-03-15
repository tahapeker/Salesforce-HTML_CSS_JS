const dinosaur = document.getElementById('dinosaur');

function jump() {
  let position = 0;
  let interval = setInterval(() => {
    if (position === 150) {
      clearInterval(interval);
      let downInterval = setInterval(() => {
        if (position === 0) {
          clearInterval(downInterval);
        } else {
          position -= 10;
          dinosaur.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 10;
      dinosaur.style.bottom = position + 'px';
    }
  }, 20);
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});
