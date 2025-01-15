const scroller = document.getElementById('portfolio')

window.addEventListener('wheel', e => {
  scroller.scrollLeft += e.deltaY;
})