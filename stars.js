const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let stars = [];
for(let i = 0; i < 100; i++){
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.5,
    velocity: Math.random() * 0.3
  });
}

function drawStars(){
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#ffffff';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.velocity;
    if(star.y > h) {
      star.y = 0;
      star.x = Math.random() * w;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
