// Fechas de Ejemplo para las Bodas en la Expo
const weddingDates = [
  new Date("Nov 14, 2026 18:00:00").getTime(),
  new Date("Dec 12, 2026 17:00:00").getTime(),
  new Date("Jan 16, 2027 18:30:00").getTime()
];

const singleCardDate = new Date("Nov 21, 2026 20:00:00").getTime();

function updateCountdowns() {
  const now = new Date().getTime();

  weddingDates.forEach((date, index) => {
    const idNum = index + 1;
    const distance = date - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(`d${idNum}`).innerText = days < 10 ? "0" + days : days;
      document.getElementById(`h${idNum}`).innerText = hours < 10 ? "0" + hours : hours;
      document.getElementById(`m${idNum}`).innerText = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById(`s${idNum}`).innerText = seconds < 10 ? "0" + seconds : seconds;
    }
  });

  const singleDistance = singleCardDate - now;
  if (singleDistance > 0) {
    const days = Math.floor(singleDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((singleDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((singleDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((singleDistance % (1000 * 60)) / 1000);

    document.getElementById(`sd1`).innerText = days < 10 ? "0" + days : days;
    document.getElementById(`sh1`).innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById(`sm1`).innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById(`ss1`).innerText = seconds < 10 ? "0" + seconds : seconds;
  }
}

setInterval(updateCountdowns, 1000);
updateCountdowns();

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function openEnvelope(envId) {
  document.getElementById(envId).classList.add("opened");
  triggerConfetti();
}

/* Modales RSVP */
function openRSVP(coupleName) {
  document.getElementById("rsvpTitle").innerText = "Confirmar Asistencia - " + coupleName;
  document.getElementById("rsvpModal").classList.add("active");
}
function closeRSVP() {
  document.getElementById("rsvpModal").classList.remove("active");
}
function submitRSVP(e) {
  e.preventDefault();
  const name = document.getElementById("rsvpName").value;
  alert(`¡Gracias ${name}! Tu confirmación ha sido registrada exitosamente.`);
  closeRSVP();
  triggerConfetti();
}

/* Modales Canciones */
function openSongModal(coupleName) {
  document.getElementById("songModal").classList.add("active");
}
function closeSongModal() {
  document.getElementById("songModal").classList.remove("active");
}
function submitSong(e) {
  e.preventDefault();
  const song = document.getElementById("songInput").value;
  alert(`¡Canción "${song}" sugerida correctamente a los novios!`);
  closeSongModal();
  triggerConfetti();
}

/* Modales Regalos / CBU */
function openGiftModal(coupleName, cbu, alias) {
  document.getElementById("giftTitle").innerText = "Regalos - " + coupleName;
  document.getElementById("giftCBU").value = cbu;
  document.getElementById("giftAlias").value = alias;
  document.getElementById("giftModal").classList.add("active");
}
function closeGiftModal() {
  document.getElementById("giftModal").classList.remove("active");
}
function copyAccountData() {
  const cbu = document.getElementById("giftCBU").value;
  const alias = document.getElementById("giftAlias").value;
  navigator.clipboard.writeText(`CBU: ${cbu}\nAlias: ${alias}`);
  alert("¡Datos de cuenta copiados al portapapeles!");
}
