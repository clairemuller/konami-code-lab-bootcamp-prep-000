const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

document.body.addEventListener(keydown,)

function init(e) {
  const x = e.key;
  
  if (x === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert('Woohoo!');
      
      index = 0;
    }
  } else {
    index = 0;
  }
}



