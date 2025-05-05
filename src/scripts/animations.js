import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.9.0/+esm"
  
// HERO

inView(".hero .logo", (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [-50, 0] },
      { duration: 0.8, easing: 'ease-out' }
    )
  }, { once: true })

  for (let i = 1; i <= 4; i++) {
inView(`.bento-el-${i}`, (el) => {
  el.classList.add('animate-fade-in');
}, { once: true });
}

// ABOUT
inView(".about header", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-50, 0] },
    { duration: 0.8, easing: 'ease-out' }
  )
}, { once: true })

inView(".about .footer", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-50, 0] },
    { duration: 1, easing: 'ease-out' }
  )
}, { once: true })

for (let i = 1; i <= 4; i++) {
inView(`.feature-${i}`, (el) => {
el.classList.add('animate-fade-in');
}, { once: true });
}

// MODALITIES

inView(".carousel-container", (el) => {
    el.classList.add('animate-fade-in');
    }, { once: true });
