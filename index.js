const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    var dodger = document.getElementById('dodger')
  
    var newPosition = dodger.style.left.replace('rem', '')
    var left = parseInt(newPosition, 10)
  
    var gameWidth = document.getElementById('game').offsetWidth
    var dodgerWidth = dodger.offsetWidth
  
    if (left + dodgerWidth > gameWidth) {
      dodger.style.left = `${left + 1}px`
    }
  }  
  moveDodgerRight() 
  
  