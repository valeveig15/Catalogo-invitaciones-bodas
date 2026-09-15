const catalog = document.getElementById('catalog');
const invites = [...document.querySelectorAll('.invite')];
let current = 0;

function goToInvite(index){
  current = (index + invites.length) % invites.length;
  catalog.scrollTo({left: current * catalog.clientWidth, behavior:'smooth'});
  invites[current].scrollTo({top:0,behavior:'instant'});
}
document.getElementById('prevInvite').addEventListener('click',()=>goToInvite(current-1));
document.getElementById('nextInvite').addEventListener('click',()=>goToInvite(current+1));
catalog.addEventListener('scroll',()=>{ const i=Math.round(catalog.scrollLeft/Math.max(1,catalog.clientWidth)); if(i!==current && i>=0&&i<invites.length) current=i; },{passive:true});
window.addEventListener('resize',()=>{catalog.scrollLeft=current*catalog.clientWidth});
document.addEventListener('keydown',e=>{if(!document.getElementById('modal').classList.contains('open')){if(e.key==='ArrowRight')goToInvite(current+1);if(e.key==='ArrowLeft')goToInvite(current-1)}});

// drag horizontal cuando la invitación está al comienzo de su scroll
let startX=0,startY=0,tracking=false;
catalog.addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY;tracking=true});
catalog.addEventListener('pointerup',e=>{if(!tracking)return; tracking=false; const dx=e.clientX-startX,dy=e.clientY-startY; if(Math.abs(dx)>90&&Math.abs(dx)>Math.abs(dy)*1.4) goToInvite(current+(dx<0?1:-1));});

// portada -> siguiente bloque
for(const btn of document.querySelectorAll('[data-next-section]')) btn.addEventListener('click',()=>{const section=btn.closest('.section');const invite=btn.closest('.invite');const next=section.nextElementSibling;if(next&&invite)invite.scrollTo({top:next.offsetTop,behavior:'smooth'})});

function countdownData(target){let diff=Math.max(0,target-Date.now());return [['Días',Math.floor(diff/86400000)],['Horas',Math.floor(diff%86400000/3600000)],['Minutos',Math.floor(diff%3600000/60000)],['Segundos',Math.floor(diff%60000/1000)]]}
function updateCountdowns(){for(const invite of invites){const target=new Date(invite.dataset.date).getTime();const values=countdownData(target);for(const el of invite.querySelectorAll('[data-countdown="digital"]')) el.innerHTML=values.map(([l,v])=>`<div class="unit"><b>${String(v).padStart(2,'0')}</b><span>${l==='Minutos'?'min':l==='Segundos'?'seg':l==='Horas'?'hrs':'días'}</span></div>`).join('');for(const el of invite.querySelectorAll('[data-countdown="rings"]')) el.innerHTML=values.map(([l,v])=>`<div class="ring"><b>${v}</b><span>${l}</span></div>`).join('')}}
updateCountdowns();setInterval(updateCountdowns,1000);

// modales de demo
const modal=document.getElementById('modal'),modalBody=document.getElementById('modalBody');
function openModal(html){modalBody.innerHTML=html;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
for(const b of document.querySelectorAll('[data-rsvp]'))b.addEventListener('click',()=>{openModal(`<h2>Confirmación de asistencia</h2><p>${b.dataset.rsvp}</p><form id="rsvpForm"><input required placeholder="Nombre y apellido"><select><option>Confirmo asistencia</option><option>No podré asistir</option></select><textarea placeholder="Mensaje / requerimiento alimentario"></textarea><button class="pill pill-sage">ENVIAR</button></form>`);document.getElementById('rsvpForm').addEventListener('submit',e=>{e.preventDefault();openModal('<h2>¡Gracias!</h2><p>Tu respuesta quedó registrada en esta demostración.</p>')})});
for(const b of document.querySelectorAll('[data-gift]'))b.addEventListener('click',()=>openModal('<h2>Luna de miel</h2><p>Banco Demo<br><b>Alias: NUESTRA.LUNA</b><br>Datos ficticios para la exposición.</p>'));
for(const b of document.querySelectorAll('[data-song]'))b.addEventListener('click',()=>openModal('<h2>¿Qué canción no puede faltar?</h2><form id="songForm"><input required placeholder="Canción"><input placeholder="Artista"><button class="pill pill-beige">ENVIAR SUGERENCIA</button></form>'));
for(const b of document.querySelectorAll('[data-map]'))b.addEventListener('click',()=>window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.dataset.map)}`,'_blank','noopener'));
function downloadICS(invite){const start=new Date(invite.dataset.date),end=new Date(start.getTime()+6*3600000),fmt=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');const body=`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nDTSTART:${fmt(start)}\r\nDTEND:${fmt(end)}\r\nSUMMARY:Boda ${invite.dataset.couple}\r\nEND:VEVENT\r\nEND:VCALENDAR`;const blob=new Blob([body],{type:'text/calendar'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='boda.ics';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),800)}
for(const b of document.querySelectorAll('[data-calendar]'))b.addEventListener('click',()=>downloadICS(b.closest('.invite')));

// mini carrusel de la quinta invitación
const s5Imgs=['https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=850&q=88','https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=850&q=88','https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=850&q=88'];let s5Index=0;const s5Slide=document.getElementById('s5Slide');document.querySelector('.single-carousel .next')?.addEventListener('click',()=>{s5Index=(s5Index+1)%s5Imgs.length;s5Slide.src=s5Imgs[s5Index]});document.querySelector('.single-carousel .prev')?.addEventListener('click',()=>{s5Index=(s5Index+s5Imgs.length-1)%s5Imgs.length;s5Slide.src=s5Imgs[s5Index]});

// sonido / WhatsApp demo
let soundOn=false;document.getElementById('soundFab').addEventListener('click',e=>{soundOn=!soundOn;e.currentTarget.innerHTML=soundOn?'♪':'Ⅱ›'});document.getElementById('waFab').addEventListener('click',()=>openModal('<h2>¿Tenés dudas?</h2><p>Este botón puede abrir WhatsApp con un mensaje prearmado para los novios o para tu estudio.</p>'));
