const container = document.getElementById('container');
const clickStart = document.getElementById('click-start');
const text = document.getElementById('text');

const totalTime = 16000;
const breatheTime = 4000;
const holdTime = 4000;




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

// setInterval(breathAnimation, totalTime);
