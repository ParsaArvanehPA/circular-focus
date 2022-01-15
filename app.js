const dom = document.documentElement;
dom.addEventListener('mousemove', (e) => {
    dom.style.setProperty('--x', e.clientX + "px");
    dom.style.setProperty('--y', e.clientY + "px");
})

window.addEventListener('load', (e) => {
    dom.style.setProperty('--x', window.innerWidth / 2 + "px");
    dom.style.setProperty('--y', window.innerHeight / 2 + "px");
});