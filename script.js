/*
  CATÁLOGO DE INVITACIONES DE BODA · DEMO PARA GITHUB PAGES
  ---------------------------------------------------------
  Para agregar un modelo nuevo, duplicá un objeto dentro de WEDDINGS.
  GitHub Pages es estático: RSVP / playlist se simulan y guardan en localStorage.
  En producción se pueden enviar a Formspree, Google Forms/Sheets, Supabase, etc.
*/

const WEDDINGS = [
  {
    id: "ivory",
    model: "Ivory Romance",
    theme: "theme-ivory",
    initials: "S · M",
    partner1: "Sofía",
    partner2: "Mateo",
    date: "2027-03-20T18:00:00-03:00",
    dateLabel: "20 · MARZO · 2027",
    phrase: "Hay historias que empiezan mucho antes del sí. Queremos celebrar la nuestra con vos.",
    hero: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "18:00", title: "Ceremonia", place: "Capilla del Prado", detail: "Av. Agraciada 3787 · Montevideo" },
    party: { time: "20:00", title: "Celebración", place: "Casona Mauá", detail: "Rambla Baltasar Brum 2936 · Montevideo" },
    dress: "Elegante · tonos libres",
    timeline: [["18:00","Ceremonia","Nos encontramos en la capilla"],["19:15","Recepción","Brindis de bienvenida"],["20:30","Cena","Mesa compartida y celebración"],["23:00","Fiesta","Abrimos la pista"]],
    map: "https://www.google.com/maps/search/?api=1&query=Montevideo+Uruguay",
    instagram: "#SofiYMateo",
  },
  {
    id: "olive",
    model: "Olive Garden",
    theme: "theme-olive",
    initials: "C · J",
    partner1: "Clara",
    partner2: "Joaquín",
    date: "2027-04-10T17:30:00-03:00",
    dateLabel: "10 · ABRIL · 2027",
    phrase: "Un jardín, nuestra gente y una tarde para recordar toda la vida.",
    hero: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "17:30", title: "Ceremonia al aire libre", place: "La Baguala", detail: "Camino Sanguinetti 5552 · Montevideo" },
    party: { time: "19:00", title: "Cena & fiesta", place: "La Baguala", detail: "Continuamos en el mismo lugar" },
    dress: "Garden formal",
    timeline: [["17:30","Ceremonia","Bajo los árboles"],["18:30","Cóctel","Jardín y música en vivo"],["20:00","Cena","Menú de estación"],["22:30","Fiesta","Bailamos hasta tarde"]],
    map: "https://www.google.com/maps/search/?api=1&query=La+Baguala+Montevideo",
    instagram: "#ClaraYJoaco",
  },
  {
    id: "noir",
    model: "Noir & Gold",
    theme: "theme-noir",
    initials: "E · T",
    partner1: "Emilia",
    partner2: "Tomás",
    date: "2027-05-08T20:30:00-03:00",
    dateLabel: "08 · MAYO · 2027",
    phrase: "Una noche. Una promesa. Todos nuestros afectos en el mismo lugar.",
    hero: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "20:30", title: "Ceremonia", place: "Sofitel Montevideo", detail: "Rambla República de México 6451" },
    party: { time: "21:30", title: "Gala", place: "Salón Imperial", detail: "Cena, brindis y pista" },
    dress: "Black tie",
    timeline: [["20:30","Ceremonia","Recepción de invitados"],["21:30","Cena","Gala y brindis"],["23:30","Primer baile","Emilia & Tomás"],["00:00","After","DJ y cocktails"]],
    map: "https://www.google.com/maps/search/?api=1&query=Sofitel+Montevideo",
    instagram: "#EmiYTomi",
  },
  {
    id: "riviera",
    model: "Riviera Blue",
    theme: "theme-riviera",
    initials: "M · F",
    partner1: "Martina",
    partner2: "Felipe",
    date: "2027-01-23T18:30:00-03:00",
    dateLabel: "23 · ENERO · 2027",
    phrase: "El verano nos encontró. Ahora queremos brindar frente al agua con ustedes.",
    hero: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "18:30", title: "Ceremonia", place: "José Ignacio", detail: "Maldonado · Uruguay" },
    party: { time: "20:00", title: "Sunset reception", place: "Club de mar", detail: "Cena junto al océano" },
    dress: "Summer chic",
    timeline: [["18:30","Ceremonia","Frente al mar"],["19:15","Sunset","Cocktails y fotos"],["21:00","Cena","Sabores del verano"],["23:30","Fiesta","Música bajo las estrellas"]],
    map: "https://www.google.com/maps/search/?api=1&query=Jose+Ignacio+Uruguay",
    instagram: "#MartiYFeli",
  },
  {
    id: "terra",
    model: "Terracotta Boho",
    theme: "theme-terra",
    initials: "L · N",
    partner1: "Lucía",
    partner2: "Nicolás",
    date: "2027-09-18T16:30:00-03:00",
    dateLabel: "18 · SETIEMBRE · 2027",
    phrase: "Nos elegimos para caminar juntos. Este día queremos compartirlo con nuestra gente favorita.",
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "16:30", title: "Ceremonia", place: "Bodega Bouza", detail: "Camino de la Redención 7658" },
    party: { time: "18:00", title: "Mesa larga", place: "Bodega Bouza", detail: "Vinos, cena y música" },
    dress: "Boho elegante",
    timeline: [["16:30","Ceremonia","Patio de la bodega"],["17:30","Aperitivo","Vinos y tapeo"],["19:00","Cena","Mesa larga"],["22:00","Fiesta","Fogón, música y baile"]],
    map: "https://www.google.com/maps/search/?api=1&query=Bodega+Bouza+Montevideo",
    instagram: "#LuYNico",
  },
  {
    id: "editorial",
    model: "Modern Editorial",
    theme: "theme-editorial",
    initials: "A · B",
    partner1: "Ana",
    partner2: "Bruno",
    date: "2027-11-06T19:00:00-03:00",
    dateLabel: "06 / 11 / 2027",
    phrase: "LOVE, FAMILY, FRIENDS — AND ONE VERY GOOD PARTY.",
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    ceremony: { time: "19:00", title: "Ceremonia", place: "Museo de Artes Visuales", detail: "Montevideo" },
    party: { time: "20:30", title: "Dinner / Party", place: "Patio central", detail: "One venue · one night" },
    dress: "Cocktail / monochrome",
    timeline: [["19:00","CEREMONY","Doors open 18:30"],["20:00","DRINKS","Cocktail hour"],["21:00","DINNER","Seated dinner"],["23:00","DANCE","See you on the floor"]],
    map: "https://www.google.com/maps/search/?api=1&query=Museo+Nacional+de+Artes+Visuales+Montevideo",
    instagram: "#ANAxBRUNO",
  },
];

const slider = document.getElementById("invitationSlider");
const dots = document.getElementById("modelDots");
const currentModel = document.getElementById("currentModel");
const toast = document.getElementById("toast");
let currentIndex = 0;
let activeCouple = "";
let toastTimer;

function invitationTemplate(w, index) {
  const timelineRows = w.timeline.map(([time, title, detail]) => `
    <div class="timeline-row">
      <span class="timeline-time">${time}</span>
      <div class="timeline-event"><strong>${title}</strong><span>${detail}</span></div>
    </div>`).join("");

  return `
  <article class="invitation ${w.theme}" id="inv-${w.id}" data-index="${index}" data-date="${w.date}">
    <div class="cover" id="cover-${w.id}">
      <div class="cover-content">
        <div class="monogram">${w.initials}</div>
        <p class="small">Tenemos algo para contarte</p>
        <h1>${w.partner1}<br><span>&</span> ${w.partner2}</h1>
        <p class="date">${w.dateLabel}</p>
        <button class="open-button" data-open-cover="cover-${w.id}" data-couple="${w.partner1} & ${w.partner2}">
          Abrir invitación
        </button>
      </div>
    </div>

    <section class="section hero" style="--hero-image:url('${w.hero}')">
      <div class="section-inner">
        <p class="section-kicker">Nos casamos</p>
        <h1>${w.partner1}<span class="amp">&</span>${w.partner2}</h1>
        <p class="hero-date">${w.dateLabel}</p>
      </div>
      <div class="scroll-cue"><i class="fa-solid fa-chevron-down"></i> DESLIZÁ HACIA ABAJO</div>
    </section>

    <section class="section countdown-wrap">
      <span class="decor" aria-hidden="true"></span>
      <div class="section-inner">
        <p class="section-kicker">Falta muy poco</p>
        <h2>${w.phrase}</h2>
        <div class="countdown" data-countdown="${w.date}">
          <div class="time-box"><strong data-unit="days">00</strong><span>Días</span></div>
          <div class="time-box"><strong data-unit="hours">00</strong><span>Horas</span></div>
          <div class="time-box"><strong data-unit="minutes">00</strong><span>Min</span></div>
          <div class="time-box"><strong data-unit="seconds">00</strong><span>Seg</span></div>
        </div>
        <button class="secondary-action" data-calendar="${w.id}"><i class="fa-regular fa-calendar-plus"></i> Agendar fecha</button>
      </div>
    </section>

    <section class="section">
      <span class="decor" aria-hidden="true"></span>
      <div class="section-inner">
        <p class="section-kicker">El gran día</p>
        <h2>Lugares & horarios</h2>
        <div class="event-grid">
          <div class="info-card">
            <div class="info-icon"><i class="fa-solid fa-heart"></i></div>
            <h3>${w.ceremony.title}</h3>
            <p><strong>${w.ceremony.time} hs</strong><br>${w.ceremony.place}<br>${w.ceremony.detail}</p>
          </div>
          <div class="info-card">
            <div class="info-icon"><i class="fa-solid fa-champagne-glasses"></i></div>
            <h3>${w.party.title}</h3>
            <p><strong>${w.party.time} hs</strong><br>${w.party.place}<br>${w.party.detail}</p>
          </div>
          <div class="info-card full">
            <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
            <h3>Cómo llegar</h3>
            <p>Abrí la ubicación directamente en Google Maps.</p>
            <a class="inline-link" href="${w.map}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Ver mapa</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <p class="section-kicker">Itinerario</p>
        <h2>Todo en un vistazo</h2>
        <div class="timeline">${timelineRows}</div>
      </div>
    </section>

    <section class="section experience">
      <span class="decor" aria-hidden="true"></span>
      <div class="section-inner">
        <p class="section-kicker">Participá</p>
        <h2>La invitación también puede hacer esto</h2>
        <p class="section-copy">Funciones pensadas para que el invitado encuentre todo en un solo lugar.</p>
        <div class="action-grid">
          <button class="feature-button" data-rsvp="${w.id}"><i class="fa-solid fa-envelope-open-text"></i><span>Confirmar asistencia</span></button>
          <button class="feature-button" data-song="${w.id}"><i class="fa-solid fa-music"></i><span>Sugerir canción</span></button>
          <button class="feature-button" data-gift="${w.id}"><i class="fa-solid fa-gift"></i><span>Regalos</span></button>
          <a class="feature-link" href="https://photos.google.com/" target="_blank" rel="noopener"><i class="fa-regular fa-images"></i><span>Álbum compartido</span></a>
          <button class="feature-button" data-calendar="${w.id}"><i class="fa-regular fa-calendar-plus"></i><span>Agregar al calendario</span></button>
          <button class="feature-button" data-share="${w.id}"><i class="fa-solid fa-share-nodes"></i><span>Compartir invitación</span></button>
        </div>
      </div>
    </section>

    <section class="section final-section">
      <div class="section-inner">
        <div class="rings"><i class="fa-solid fa-infinity"></i></div>
        <p class="section-kicker">Dress code · ${w.dress}</p>
        <h2>Lo único imprescindible es que estés.</h2>
        <p class="section-copy" style="margin-inline:auto">Instagram wall: <strong>${w.instagram}</strong></p>
        <div class="final-actions">
          <button class="primary-action" data-rsvp="${w.id}"><i class="fa-solid fa-check"></i> Confirmar asistencia</button>
          <button class="secondary-action" data-back-top="${w.id}"><i class="fa-solid fa-arrow-up"></i> Volver arriba</button>
        </div>
      </div>
    </section>
  </article>`;
}

function renderInvitations() {
  slider.innerHTML = WEDDINGS.map(invitationTemplate).join("");
  dots.innerHTML = WEDDINGS.map((w, i) => `<button class="model-dot ${i === 0 ? "active" : ""}" aria-label="Ver ${w.model}" data-go="${i}"></button>`).join("");
}

function updateCountdowns() {
  const now = Date.now();
  document.querySelectorAll("[data-countdown]").forEach(box => {
    const distance = new Date(box.dataset.countdown).getTime() - now;
    const safe = Math.max(0, distance);
    const days = Math.floor(safe / 86400000);
    const hours = Math.floor((safe % 86400000) / 3600000);
    const minutes = Math.floor((safe % 3600000) / 60000);
    const seconds = Math.floor((safe % 60000) / 1000);
    const values = { days, hours, minutes, seconds };
    Object.entries(values).forEach(([unit, value]) => {
      const node = box.querySelector(`[data-unit="${unit}"]`);
      if (node) node.textContent = String(value).padStart(2, "0");
    });
  });
}

function goToModel(index) {
  const bounded = Math.max(0, Math.min(WEDDINGS.length - 1, index));
  slider.scrollTo({ left: bounded * window.innerWidth, behavior: "smooth" });
}

function setCurrent(index) {
  currentIndex = Math.max(0, Math.min(WEDDINGS.length - 1, index));
  currentModel.textContent = `${String(currentIndex + 1).padStart(2,"0")} · ${WEDDINGS[currentIndex].model}`;
  document.querySelectorAll(".model-dot").forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

function weddingById(id) { return WEDDINGS.find(w => w.id === id); }

function openModal(id) { document.getElementById(id)?.classList.add("active"); }
function closeModal(id) { document.getElementById(id)?.classList.remove("active"); }

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function celebrate() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 90, spread: 68, origin: { y: .65 }, scalar: .85 });
  }
}

function openRSVP(id) {
  const w = weddingById(id);
  activeCouple = id;
  document.getElementById("rsvpCouple").textContent = w ? `${w.partner1} & ${w.partner2} · ${w.dateLabel}` : "";
  openModal("rsvpModal");
}

function downloadICS(w) {
  const start = new Date(w.date);
  const end = new Date(start.getTime() + 7 * 60 * 60 * 1000);
  const format = d => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Expo Invitaciones//ES", "BEGIN:VEVENT",
    `UID:${w.id}-${Date.now()}@wedding-demo`, `DTSTAMP:${format(new Date())}`, `DTSTART:${format(start)}`, `DTEND:${format(end)}`,
    `SUMMARY:Boda de ${w.partner1} y ${w.partner2}`, `DESCRIPTION:Invitación digital · ${w.model}`,
    `LOCATION:${w.ceremony.place}`, "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `boda-${w.id}.ics`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Fecha lista para agregar al calendario");
}

async function shareWedding(w) {
  const shareData = { title: `Boda de ${w.partner1} & ${w.partner2}`, text: `Te invitamos a nuestra boda · ${w.dateLabel}`, url: location.href.split("#")[0] + `#inv-${w.id}` };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(shareData.url);
      showToast("Link copiado al portapapeles");
    }
  } catch (e) {
    if (e?.name !== "AbortError") showToast("No se pudo compartir desde este navegador");
  }
}

renderInvitations();
updateCountdowns();
setInterval(updateCountdowns, 1000);

/* Abrir la invitación desde la tapa */
document.addEventListener("click", e => {
  const open = e.target.closest("[data-open-cover]");
  if (open) {
    document.getElementById(open.dataset.openCover)?.classList.add("opened");
    celebrate();
    return;
  }

  const dot = e.target.closest("[data-go]");
  if (dot) { goToModel(Number(dot.dataset.go)); return; }

  const rsvp = e.target.closest("[data-rsvp]");
  if (rsvp) { openRSVP(rsvp.dataset.rsvp); return; }

  const song = e.target.closest("[data-song]");
  if (song) { activeCouple = song.dataset.song; openModal("songModal"); return; }

  const gift = e.target.closest("[data-gift]");
  if (gift) { activeCouple = gift.dataset.gift; openModal("giftModal"); return; }

  const calendar = e.target.closest("[data-calendar]");
  if (calendar) { const w = weddingById(calendar.dataset.calendar); if (w) downloadICS(w); return; }

  const share = e.target.closest("[data-share]");
  if (share) { const w = weddingById(share.dataset.share); if (w) shareWedding(w); return; }

  const back = e.target.closest("[data-back-top]");
  if (back) { document.getElementById(`inv-${back.dataset.backTop}`)?.scrollTo({ top: 0, behavior: "smooth" }); return; }

  const closer = e.target.closest("[data-close-modal]");
  if (closer) closeModal(closer.dataset.closeModal);
});

/* Cerrar modal haciendo clic en el fondo */
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
});

/* Navegación del catálogo */
document.getElementById("prevInvitation").addEventListener("click", () => goToModel(currentIndex - 1));
document.getElementById("nextInvitation").addEventListener("click", () => goToModel(currentIndex + 1));

let scrollRAF;
slider.addEventListener("scroll", () => {
  cancelAnimationFrame(scrollRAF);
  scrollRAF = requestAnimationFrame(() => {
    const index = Math.round(slider.scrollLeft / window.innerWidth);
    if (index !== currentIndex) setCurrent(index);
    document.getElementById("swipeHint").classList.add("hide");
  });
});

window.addEventListener("keydown", e => {
  if (document.querySelector(".modal-overlay.active")) {
    if (e.key === "Escape") document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
    return;
  }
  if (e.key === "ArrowRight") goToModel(currentIndex + 1);
  if (e.key === "ArrowLeft") goToModel(currentIndex - 1);
});

/* Formularios demo */
document.getElementById("rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  const entry = {
    couple: activeCouple,
    name: document.getElementById("rsvpName").value.trim(),
    attendance: document.getElementById("rsvpAttendance").value,
    diet: document.getElementById("rsvpDiet").value,
    message: document.getElementById("rsvpMessage").value.trim(),
    createdAt: new Date().toISOString(),
  };
  const saved = JSON.parse(localStorage.getItem("weddingDemoRSVP") || "[]");
  saved.push(entry);
  localStorage.setItem("weddingDemoRSVP", JSON.stringify(saved));
  e.target.reset();
  closeModal("rsvpModal"); celebrate(); showToast("Confirmación guardada en esta demo");
});

document.getElementById("songForm").addEventListener("submit", e => {
  e.preventDefault();
  const song = document.getElementById("songInput").value.trim();
  const saved = JSON.parse(localStorage.getItem("weddingDemoSongs") || "[]");
  saved.push({ couple: activeCouple, song, createdAt: new Date().toISOString() });
  localStorage.setItem("weddingDemoSongs", JSON.stringify(saved));
  e.target.reset(); closeModal("songModal"); celebrate(); showToast("Canción agregada a la demo");
});

document.getElementById("copyGiftAlias").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("NUESTRA.BODA.DEMO"); showToast("Alias copiado"); }
  catch { showToast("Alias: NUESTRA.BODA.DEMO"); }
});

/* Si se llega con #inv-id desde un link compartido, mostrar ese modelo */
window.addEventListener("load", () => {
  const hash = location.hash.replace("#inv-", "");
  const index = WEDDINGS.findIndex(w => w.id === hash);
  if (index >= 0) { goToModel(index); setCurrent(index); }
});
