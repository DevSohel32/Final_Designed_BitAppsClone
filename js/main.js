const targetDate = new Date("2025-12-31T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Offer Expired!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

 const mainFab = document.getElementById('mainFab');
  const fabMenu = document.getElementById('fabMenu');

  mainFab.addEventListener('click', () => {
    const isOpen = !fabMenu.classList.contains('hidden');

    if (isOpen) {
      fabMenu.classList.add('hidden');
      mainFab.textContent = 'F';
    } else {
      fabMenu.classList.remove('hidden');
      mainFab.textContent = '✕';
    }
  });