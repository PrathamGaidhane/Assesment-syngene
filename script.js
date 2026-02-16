// 1. Select all panels
    const panels = document.querySelectorAll('.panel');

    // 2. Add click event to each
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Remove 'active' class from all other panels
            panels.forEach(p => p.classList.remove('active'));
            
            // Add 'active' class to the clicked panel
            panel.classList.add('active');
        });
    });


    const slider = document.getElementById('slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let isDown = false;
let startX;
let scrollLeft;

/* Mouse Drag */
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

/* Buttons */
prev.addEventListener('click', () => {
  slider.scrollLeft -= 400;
});

next.addEventListener('click', () => {
  slider.scrollLeft += 400;
});


