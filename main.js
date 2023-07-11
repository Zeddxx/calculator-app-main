const dot = document.querySelector('.dot');
const btn = document.querySelector('.main-toggle-btn');
const mainEl = document.querySelector('.main-body');
const theme1Color = document.querySelectorAll('.theme1');
const theme2Color = document.querySelectorAll('.theme2');
const theme3Color = document.querySelectorAll('.theme3');

const inputEl = document.querySelector('.forInput');
const btnsDiv = document.querySelector('.buttons-div');

const deleteBtn = document.getElementById('delete');
const resetBtn = document.getElementById('reset');
const equalBtn = document.getElementById('equal');

const keyBtn = document.querySelectorAll('.key-btn');

let cursorEl = document.querySelector('.cursor');

let currentPosition = 0;
const positions = [ -3,25, 60, 25];

function forTheme1(){
  theme1Color.forEach(theme => {
    theme.style.color = '#fff';
  });
  keyBtn.forEach(keys => {
    keys.style.background = '';
    keys.style.boxShadow = '';
  })
  cursorEl.style.background = '';
  btn.style.background = '';
  dot.style.background = '';
  mainEl.style.background = '';
  inputEl.style.background = '';
  btnsDiv.style.background = '';
  equalBtn.style.background = '';
  deleteBtn.style.background = '';
}
function forTheme2(){
    theme2Color.forEach(theme2 => {
        theme2.style.color = 'var(--t2-very-dark-grayish-yellow)';
    });
    keyBtn.forEach(keys => {
        keys.style.background = 'var(--t2-light-grayish-yellow-key-bg)';
        keys.style.boxShadow = '0px -4px var(--t2-dark-grayish-orange-key-shadow) inset';
      })
      cursorEl.style.background = 'var(--t2-toggle-bg-nd-keypad-bg)';
    btn.style.background = 'var(--t2-toggle-bg-nd-keypad-bg)';
    mainEl.style.background = 'var(--t2-bg-main)';
    dot.style.background = 'var(--t2-key-bg-toggle)';
    inputEl.style.background = '#fff';
    btnsDiv.style.background = 'var(--t2-toggle-bg-nd-keypad-bg)';
    equalBtn.style.background = 'var(--t2-key-bg-toggle)';
    equalBtn.style.boxShadow = '0 -4px var(--t2-dark-orange-key-shadow) inset';
    deleteBtn.style.background = 'var(--t2-key-bg)';
    deleteBtn.style.boxShadow = '0px -4px var(--t2-key-shadow) inset';
    resetBtn.style.background = 'var(--t2-key-bg)';
    resetBtn.style.boxShadow = '0px -4px var(--t2-key-shadow) inset';
}   
function forTheme3(){
    theme3Color.forEach(theme3 => {
        theme3.style.color = 'var(--t3-light-yellow)';
    });
    keyBtn.forEach(keys => {
        keys.style.background = 'var(--t3-key-bg-3-2)';
        keys.style.boxShadow = '0 -4px var(--t3-key-shadow-3-3) inset';
    })
    cursorEl.style.background = 'var(--t3-key-shadow-3-1)';
    mainEl.style.background = 'var(--t3-very-dark-violet-main-bg)';
    dot.style.background = 'var(--t3-key-bg-toggle-3-1)';
    btn.style.background = 'var(--t3-very-dark-violet-toggle-keypad)';
    inputEl.style.background = 'var(--t3-very-dark-violet-toggle-keypad)';
    btnsDiv.style.background = 'var(--t3-very-dark-violet-toggle-keypad)';
    equalBtn.style.background = 'var(--t3-key-bg-toggle-3-1)';
    equalBtn.style.boxShadow = '0px -4px var(--t3-key-shadow-3-2) inset'
    deleteBtn.style.background = 'var(--t3-key-bg-3-1)';
    deleteBtn.style.boxShadow ='0px -4px var(--t3-key-shadow-3-1) inset';
    resetBtn.style.background = 'var(--t3-key-bg-3-1)';
    resetBtn.style.boxShadow = '0px -4px var(--t3-key-shadow-3-1) inset';
}


function changePosition() {
  currentPosition = (currentPosition + 1) % positions.length;
  dot.style.left = `${positions[currentPosition]}%`;
  if(positions[currentPosition] === 29){
    forTheme2();

  }else if(positions[currentPosition] === 64){
    forTheme3();
  }else{
    forTheme1();
  }
}

btn.addEventListener('click', changePosition);

// for calculation
function dis(val) {
  const outputElement = document.querySelector('.output');
  let outputText = outputElement.innerText;

  // Remove leading zero if it exists
  if (outputText === '0') {
    outputText = '';
  }

  // Append the new value to the outputText
  outputText += val;

  // Update the innerText of the outputElement
  outputElement.innerText = outputText;
}

function myFunction(event) {
  if (
    event.key == '0' ||
    event.key == '1' ||
    event.key == '2' ||
    event.key == '3' ||
    event.key == '4' ||
    event.key == '5' ||
    event.key == '6' ||
    event.key == '7' ||
    event.key == '8' ||
    event.key == '9' ||
    event.key == '+' ||
    event.key == '-' ||
    event.key == '*' ||
    event.key == '/'
  ) {
    document.querySelector('.output').innerText += event.key;
  } else if (event.key == 'String') {
    alert('Enter a number');
  }
}

function solve() {
  let x = document.querySelector('.output').innerText;
  try {
    let y = math.evaluate(x);
    document.querySelector('.output').innerText = y;
  } catch (error) {
    document.querySelector('.output').innerText = 'Invalid!';
  }
}

function clr() {
  document.querySelector('.output').innerText = '0';
}

function del() {
  const outputElement = document.querySelector('.output');
  let outputText = outputElement.innerText;

  // Remove the last character from the outputText
  outputText = outputText.slice(0, -1);

  // If the outputText is empty, set it to '0'
  if (outputText === '') {
    outputText = '0';
  }

  // Update the innerText of the outputElement
  outputElement.innerText = outputText;
};

document.addEventListener('mousemove', (e) => {
  cursorEl.style.left = e.clientX - 60 + 'px';
  cursorEl.style.top = e.clientY - 60 + 'px';
});
