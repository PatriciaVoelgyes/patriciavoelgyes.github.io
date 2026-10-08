const els=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('visible');io.unobserve(e.target);
  const n=e.target.querySelector('.num');
  if(n)count(n);
}),{threshold:.15});
els.forEach(el=>io.observe(el));
function count(n){
  const t=+n.dataset.count,p=n.dataset.prefix||'',s=n.dataset.suffix||'';let st=null;
  const step=ts=>{st??=ts;const k=Math.min((ts-st)/1500,1);
    n.textContent=p+Math.round(t*k)+s;if(k<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
const bar=document.getElementById('progress');
addEventListener('scroll',()=>{
  const h=document.documentElement;
  bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
},{passive:true});
document.getElementById('y').textContent=new Date().getFullYear();
