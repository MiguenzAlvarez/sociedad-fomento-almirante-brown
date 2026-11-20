const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu-principal');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const tabs=[...document.querySelectorAll('[role="tab"]')];
tabs.forEach((tab,index)=>tab.addEventListener('click',()=>activateTab(index)));
tabs.forEach((tab,index)=>tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();let next=event.key==='Home'?0:event.key==='End'?tabs.length-1:event.key==='ArrowRight'?(index+1)%tabs.length:(index-1+tabs.length)%tabs.length;activateTab(next);tabs[next].focus()}));
function activateTab(index){tabs.forEach((tab,i)=>{const selected=i===index;tab.setAttribute('aria-selected',String(selected));document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected})}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
document.getElementById('year').textContent=new Date().getFullYear();

const newsGrid=document.getElementById('news-grid');
fetch('data/novedades.json').then(response=>response.ok?response.json():Promise.reject()).then(items=>{
  if(!Array.isArray(items)||!items.length)return;
  newsGrid.innerHTML=items.slice(0,3).map(item=>`<article class="news-card reveal visible">${item.imagen?`<img src="${escapeText(item.imagen)}" alt="" loading="lazy">`:''}<div class="news-card-body"><div class="news-meta"><span>${escapeText(item.categoria||'Novedad')}</span><time datetime="${escapeText(item.fecha)}">${formatDate(item.fecha)}</time></div><h3>${escapeText(item.titulo)}</h3><p>${escapeText(item.resumen)}</p><a class="text-link" href="${escapeText(item.enlace)}" target="_blank" rel="noreferrer">Ver publicación original</a></div></article>`).join('');
}).catch(()=>{});
function escapeText(value=''){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}
function formatDate(value){if(!value)return'';const date=new Date(`${value}T12:00:00`);return Number.isNaN(date.getTime())?'':new Intl.DateTimeFormat('es-AR',{day:'numeric',month:'short',year:'numeric'}).format(date)}
