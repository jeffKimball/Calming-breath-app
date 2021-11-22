const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 16000;
const breatheTime = 4000;
const holdTime = 4000;

// function countDown(){
//   text.innerText = 4

//   setTimeout(()=>{
//     text.innerText = '3';

//     setTimeout(()=>{
//       text.innerText = '2';      

//       setTimeout(()=>{
//         text.innerText = '1';
//       },1000)
//     },1000)
//   },1000)

  
// }

// countDown()


breathAnimation();

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

setInterval(breathAnimation, totalTime);
