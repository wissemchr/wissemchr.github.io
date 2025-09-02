// Wolfsights interactions: starfield, parallax, snowfall, contact particles

(function(){
  const $ = (sel, parent=document) => parent.querySelector(sel);

  // Footer year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // STARFIELD CANVAS (hero)
  const canvas = document.getElementById('starfield');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, stars = [];
    const NUM = 260; // density

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth = canvas.offsetWidth;
      h = canvas.clientHeight = canvas.offsetHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      spawn();
    }

    function spawn(){
      stars = new Array(NUM).fill(0).map(() => ({
        x: Math.random()*w,
        y: Math.random()*h,
        z: Math.random()*1 + 0.2,
        tw: Math.random()*Math.PI*2
      }));
    }

    function draw(){
      ctx.clearRect(0,0,w,h);
      for (const s of stars){
        s.tw += 0.02;
        const bright = 0.6 + Math.sin(s.tw)*0.35;
        const size = (1.2 + s.z*1.8) * bright;
        ctx.fillStyle = `rgba(230,241,255,${0.65*bright})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI*2);
        ctx.fill();
        s.x += 0.02 * s.z; // slight drift
        if (s.x> w+4) s.x = -4;
      }
      requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    draw();
  }

  // PARALLAX layers
  const layers = document.querySelectorAll('.layer');
  if (layers.length){
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      layers.forEach(layer => {
        const speed = layer.classList.contains('moon') ? 0.15 : layer.classList.contains('wolf') ? 0.25 : 0.1;
        layer.style.transform = `translate3d(0, ${y*speed*-0.2}px, 0)`;
      });
    }, {passive:true});
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length){
    const io = new IntersectionObserver((entries)=>{
      for (const e of entries){
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, {threshold:0.2});
    reveals.forEach(el=>io.observe(el));
  }

  // CONTACT PARTICLES (gentle upward glow)
  const contactCanvas = document.getElementById('contact-particles');
  if (contactCanvas){
    const ctx = contactCanvas.getContext('2d');
    let w, h, dpr, flakes=[];
    const COUNT = 80;
    function size(){
      dpr = Math.min(window.devicePixelRatio||1, 2);
      w = contactCanvas.clientWidth = contactCanvas.offsetWidth;
      h = contactCanvas.clientHeight = contactCanvas.offsetHeight;
      contactCanvas.width = Math.floor(w*dpr);
      contactCanvas.height = Math.floor(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      flakes = new Array(COUNT).fill(0).map(()=>({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*2+0.6,
        vx: (Math.random()-0.5)*0.3,
        vy: - (Math.random()*0.6 + 0.2),
        c: Math.random()<0.6 ? 'rgba(62,240,255,' : 'rgba(123,92,255,'
      }));
    }
    function tick(){
      ctx.clearRect(0,0,w,h);
      for (const f of flakes){
        ctx.beginPath();
        ctx.fillStyle = `${f.c}${0.55})`;
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2); ctx.fill();
        f.x += f.vx; f.y += f.vy;
        if (f.y < -5){ f.y = h+5; f.x = Math.random()*w; }
      }
      requestAnimationFrame(tick);
    }
    const ro = new ResizeObserver(size); ro.observe(contactCanvas); tick();
  }
})();

