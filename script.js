const gallery = document.getElementById('horizontalGallery');
const invites = [...document.querySelectorAll('.invitation')];
const modelCounter = document.getElementById('modelCounter');
const modelName = document.getElementById('modelName');
const dots = document.getElementById('dots');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
let current = 0;

invites.forEach((invite, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Ver diseño ${i + 1}`);
  dot.addEventListener('click', () => goToInvite(i));
  dots.appendChild(dot);
});

function goToInvite(index) {
  current = (index + invites.length) % invites.length;
  gallery.scrollTo({ left: current * gallery.clientWidth, behavior: 'smooth' });
  updateUI();
}

function updateUI() {
  const invite = invites[current];
  modelCounter.textContent = `${String(current + 1).padStart(2,'0')} / ${String(invites.length).padStart(2,'0')}`;
  modelName.textContent = invite.dataset.model;
  [...dots.children].forEach((d, i) => d.classList.toggle('active', i === current));
}

document.getElementById('prevInvite').addEventListener('click', () => goToInvite(current - 1));
document.getElementById('nextInvite').addEventListener('click', () => goToInvite(current + 1));

gallery.addEventListener('scroll', () => {
  const index = Math.round(gallery.scrollLeft / Math.max(1, gallery.clientWidth));
  if (index !== current && index >= 0 && index < invites.length) { current = index; updateUI(); }
}, { passive: true });

window.addEventListener('resize', () => gallery.scrollLeft = current * gallery.clientWidth);

// Navigation downward inside each design
document.querySelectorAll('[data-scroll-next]').forEach(btn => btn.addEventListener('click', () => {
  const panel = btn.closest('.panel');
  const invite = btn.closest('.invitation');
  const next = panel?.nextElementSibling;
  if (next && invite) invite.scrollTo({ top: next.offsetTop, behavior: 'smooth' });
}));

// Countdown per invitation
function updateCountdowns() {
  const now = Date.now();
  invites.forEach(invite => {
    const target = new Date(invite.dataset.date).getTime();
    let diff = Math.max(0, target - now);
    const units = [
      ['Días', Math.floor(diff / 86400000)],
      ['Horas', Math.floor(diff % 86400000 / 3600000)],
      ['Min', Math.floor(diff % 3600000 / 60000)],
      ['Seg', Math.floor(diff % 60000 / 1000)]
    ];
    invite.querySelectorAll('[data-countdown]').forEach(container => {
      container.innerHTML = units.map(([label,value]) => `<div class="count-unit"><b>${String(value).padStart(2,'0')}</b><span>${label}</span></div>`).join('');
    });
  });
}
updateCountdowns(); setInterval(updateCountdowns, 1000);

// Scroll reveals
document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

// Hide navigation hint after first interaction
const swipeHint = document.getElementById('swipeHint');
let hintHidden = false;
function hideHint(){ if (!hintHidden){hintHidden=true;swipeHint.classList.add('hide');} }
['pointerdown','wheel','touchstart'].forEach(evt => window.addEventListener(evt, hideHint, { once:true, passive:true }));
setTimeout(hideHint, 3500);

function openModal(html) {
  modalContent.innerHTML = html;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  const first = modal.querySelector('input,button,select,textarea'); if(first) first.focus();
}
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); if(e.key === 'ArrowRight' && !modal.classList.contains('open')) goToInvite(current+1); if(e.key === 'ArrowLeft' && !modal.classList.contains('open')) goToInvite(current-1); });

// RSVP
document.querySelectorAll('[data-rsvp]').forEach(btn => btn.addEventListener('click', () => {
  const couple = btn.dataset.rsvp;
  openModal(`<p class="eyebrow">R.S.V.P.</p><h2>${couple}</h2><p>Completá estos datos para demostrar la experiencia de confirmación.</p><form id="rsvpForm"><input required name="name" placeholder="Nombre y apellido"><select name="attendance"><option value="Sí">Sí, ¡allí estaré!</option><option value="No">No podré asistir</option></select><input name="guests" type="number" min="1" max="8" value="1" placeholder="Cantidad"><textarea name="note" placeholder="Mensaje o requerimiento alimentario"></textarea><button class="pill" type="submit">ENVIAR CONFIRMACIÓN</button></form>`);
  document.getElementById('rsvpForm').addEventListener('submit', e => { e.preventDefault(); const name = new FormData(e.target).get('name'); openModal(`<p class="eyebrow">¡GRACIAS!</p><h2>Confirmación recibida</h2><p>${name}, esta es una demostración: en la versión real los datos pueden enviarse a Google Sheets, Formspree o Supabase.</p><button class="pill" onclick="document.querySelector('[data-close-modal]').click()">CERRAR</button>`); });
}));

// Gifts
document.querySelectorAll('[data-gift]').forEach(btn => btn.addEventListener('click', () => openModal(`<p class="eyebrow">REGALOS</p><h2>Luna de miel</h2><p>Banco del Río<br><strong>Caja de ahorro $ 000-123456</strong><br>Alias: NUESTRA.LUNA.MIEL</p><p style="font-size:10px">Datos ficticios para la exposición.</p>`)));

// Songs
document.querySelectorAll('[data-song]').forEach(btn => btn.addEventListener('click', () => { openModal(`<p class="eyebrow">PLAYLIST</p><h2>¿Qué canción no puede faltar?</h2><form id="songForm"><input required placeholder="Tema"><input placeholder="Artista"><button class="pill">ENVIAR SUGERENCIA</button></form>`); document.getElementById('songForm').addEventListener('submit',e=>{e.preventDefault();openModal(`<p class="eyebrow">PLAYLIST</p><h2>¡Anotada!</h2><p>La sugerencia quedó registrada en esta demostración.</p>`);}); }));

// Maps
document.querySelectorAll('[data-map]').forEach(btn => btn.addEventListener('click', () => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(btn.dataset.map)}`,'_blank','noopener')));

// Calendar (.ics) uses invitation data
function downloadICS(invite){
  const start = new Date(invite.dataset.date); const end = new Date(start.getTime()+6*3600000);
  const f = d => d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const title = invite.querySelector('h1')?.textContent.replace(/\s+/g,' ').trim() || 'Casamiento';
  const body = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Expo Invitaciones//ES\r\nBEGIN:VEVENT\r\nDTSTART:${f(start)}\r\nDTEND:${f(end)}\r\nSUMMARY:${title}\r\nDESCRIPTION:Invitación digital de demostración\r\nEND:VEVENT\r\nEND:VCALENDAR`;
  const blob = new Blob([body],{type:'text/calendar'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='boda.ics'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
document.querySelectorAll('[data-calendar]').forEach(btn => btn.addEventListener('click', () => downloadICS(btn.closest('.invitation'))));

updateUI();
