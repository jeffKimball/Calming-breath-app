const container = document.getElementById('container');
const text = document.getElementById('text');
const pointerContainer = document.querySelector('.pointer-container')

// triangle-breathing timing 
const totalTime = 12000;
const breatheTime = 4000;
const holdTime = 4000;

// items to remove on click event
const clickStart = document.getElementById('click-start');
const titleStart = document.getElementById('title-start')
const iconStart = document.getElementById('icon-start')

clickStart.addEventListener('click', ()=>{
  // remove the elements that make up the "begin" button
  clickStart.style.display = "none"
  titleStart.style.display = "none"
  iconStart.style.display = "none"

  // start the pointer animation that rotates around the gradient circle
  pointerContainer.style.animation = "rotate 12s linear forwards infinite"

  // begin the animations on the main element
  breathAnimation()
  setInterval(breathAnimation, totalTime);
})

function breathAnimation() {
  // beginning of breath cycle 1/3
  text.innerText = 'Breathe In';
  container.className = 'container grow';

    // second part of breath cycle 2/3
    setTimeout(()=>{
      text.innerText = 'Hold';

      // third part of breath cycle 3/3
      setTimeout(()=> {
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';
      }, 4000)
   }, 4000) 
}

