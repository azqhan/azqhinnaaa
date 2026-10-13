const openStory = document.getElementById('openStory');
const memories = document.querySelectorAll('.memory');
const modal = document.getElementById('memoryModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalNote = document.getElementById('modalNote');
const openLetter = document.getElementById('openLetter');
const letterPaper = document.getElementById('letterPaper');
const heartRain = document.getElementById('heartRain');
const heartLayer = document.getElementById('heartLayer');

openStory.addEventListener('click', () => {
  document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
});

memories.forEach((memory) => {
  memory.addEventListener('click', () => {
    modalTitle.textContent = memory.dataset.title;
    modalNote.textContent = memory.dataset.note;
    modal.hidden = false;
    closeModal.focus();
  });
});

function hideModal() { modal.hidden = true; }
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hideModal(); });

document.querySelectorAll('.choice').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    const answer = button.dataset.answer;
    const messages = {
      'Azqhan': 'we had a feeling he was the soft one ♡',
      'Sheinna': 'oh, so someone was hiding it well! ♡',
      'both, obviously': 'correct answer. case closed. 💌'
    };
    document.getElementById('answerResult').textContent = messages[answer];
  });
});

openLetter.addEventListener('click', () => {
  letterPaper.hidden = !letterPaper.hidden;
  openLetter.innerHTML = letterPaper.hidden ? 'Unfold the note <span>♡</span>' : 'Fold it back <span>↻</span>';
  if (!letterPaper.hidden) letterPaper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function floatHearts() {
  const symbols = ['♡', '♥', '୨୧', '✧'];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (13 + Math.random() * 19) + 'px';
    heart.style.animationDelay = (Math.random() * 1.2) + 's';
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
heartRain.addEventListener('click', floatHearts);
