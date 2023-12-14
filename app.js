let Notifs = false
let IntervalId ; 
let Not = document.querySelectorAll('.a')
Not.forEach(a => {a.addEventListener('click',() => {
  if (Notifs === false){IntervalId = setInterval(() => {if (document.title === 'Dorian Gray') {document.title = '*Read The Book*'}else{document.title = 'Dorian Gray'}}, 1000)
  Notifs = true;
  }else{clearInterval(IntervalId); Notifs = false; document.title = 'Dorian Gray'}
});})


let screenShotButtons = document.querySelectorAll('.b');

screenShotButtons.forEach(button => {
  button.addEventListener('click', () => {
    const element = document.querySelector('.specific');
    const scrollY = window.scrollY; // Get the vertical scroll position

    html2canvas(element, {
      scrollY: -scrollY, // Adjust for the scroll position
      windowHeight: document.documentElement.scrollHeight // Set the height of the window to capture the entire scrollable content
    }).then(canvas => {
      const croppedCanvas = document.createElement('canvas');
      const ctx = croppedCanvas.getContext('2d');
      const croppedHeight = canvas.height / 2; // 50% crop

      croppedCanvas.width = canvas.width;
      croppedCanvas.height = croppedHeight;
      ctx.drawImage(canvas, 0, 0, canvas.width, croppedHeight, 0, 0, canvas.width, croppedHeight);

      let a = document.createElement('a');
      a.href = croppedCanvas.toDataURL('image/png');
      a.download = 'screenshot.png';
      a.click();
    });
  });
});


setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.querySelector(".time").innerHTML = date.toLocaleTimeString();
}

function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.nav-bar').classList.toggle("w-nav")
  document.querySelectorAll('.iconInfo').forEach(iconInfo => {iconInfo.classList.toggle('afterInfo')})
  document.querySelector(".time").classList.toggle('timer') 
}

let a = false;

document.querySelectorAll('.f').forEach((b) => {
  b.addEventListener('click', () => {
    a = !a;
    document.querySelectorAll('.text-content').forEach(zoomElement => {
      zoomElement.style.transition = 'none';
      if (a === true) {
        zoomElement.style.fontSize = '24px';
      } else {
        zoomElement.style.fontSize = '16px';
      }
    });
  });
});

document.querySelectorAll('.g').forEach((b) => {
  b.addEventListener('click', () => {
    a = !a;
    document.querySelectorAll('.text-content').forEach(zoomElement => {
      zoomElement.style.transition = 'none';
      if (a === true) {
        zoomElement.style.fontSize = '13px';
      } else {
        zoomElement.style.fontSize = '16px';
      }
    });
  });
});
document.querySelectorAll('.c').forEach((b) => {b.addEventListener('click', () => {
  var text = document.querySelector('.text-content').innerText;
  var blob = new Blob([text], { type: "text/plain" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.download = 'text.txt';
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
})})