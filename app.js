const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const range = document.querySelector('#range');
const grid = document.querySelector('.grid'); 
const colorsBtn = document.querySelector('.colors');
const defaultsColorsBtn = document.querySelector('.default-colors');

const SIZE = 600;
let gridSize = 16;
let squareSize = 600 / gridSize;
let numOfSquares = gridSize * gridSize;
let useRandomColors = false;

const clearContainer = () => container.innerHTML = '';

const createGrid = (squareSize) => {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  container.append(square)
  square.addEventListener('mouseenter', () => {
    if (useRandomColors) {
      square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    } else {
      square.classList.add('paint');
    }
  })
}

for (let i = 0; i < numOfSquares; i++) {
  createGrid(squareSize);
}


range.addEventListener('input', e => {
  grid.textContent = e.target.value;
})

range.addEventListener('change', e => {
  gridSize = e.target.value;
  squareSize = 600 / gridSize;
  numOfSquares = gridSize * gridSize;

  clearContainer();

  for (let i = 0; i < numOfSquares; i++) {
    createGrid(squareSize);
  }
})

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.square').forEach(square => {
    square.classList.remove('paint');
    square.style.backgroundColor = '';
  })
})

colorsBtn.addEventListener('click', () => {
  useRandomColors = true;
})

defaultsColorsBtn.addEventListener('click', () => {
  useRandomColors = false;
})

