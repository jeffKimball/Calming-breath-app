const container = document.getElementById('container');
const clickStart = document.getElementById('click-start');
const titleStart = document.getElementById('title-start')
const iconStart = document.getElementById('icon-start')
const text = document.getElementById('text');
const pointerContainer = document.querySelector('.pointer-container')

const totalTime = 16000;
const breatheTime = 4000;
const holdTime = 4000;

clickStart.addEventListener('click', ()=>{
  clickStart.style.display = "none"
  titleStart.style.display = "none"
  iconStart.style.display = "none"
  pointerContainer.style.animation = "rotate 16s linear forwards infinite"
  breathAnimation()
  setInterval(breathAnimation, totalTime);
})


// breathAnimation();

function breathAnimation() {
  
  text.innerText = 'Breathe In';
  container.className = 'container grow';

   setTimeout(()=>{
      text.innerText = 'Hold';

      setTimeout(()=>{
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';

        setTimeout(()=>{
          text.innerText = 'Hold';
        },4000)
      },4000)
   },4000)   
}


