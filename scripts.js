window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById('jailbreak-landing-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('jailbreak-section').classList.toggle('active');
    document.body.classList.toggle('active');
    document.getElementById('jailbreak-section').scrollIntoView({behavior: 'smooth'});
  });
});
// const scroller = document.getElementById('portfolio');

// window.addEventListener('wheel', e => {
//   scroller.scrollLeft += e.deltaY;
// })