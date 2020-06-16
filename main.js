const screen = document.querySelector('.screen');
const calc = document.querySelector('.calc');

const updateScreen = (e) => {
  console.log(e);
  if (e.type == 'keydown') {
    switch (true) {
      case e.key >= '0' && e.key <= '9': {
        applyHover(e.key);
        updateScreenContent(e.key);
        break;
      }
      case e.keyCode == 27: {
        clearScreenContent();
        break;
      }
      case e.keyCode == 8: {
        delLastDigit();
        break;
      }
    }
  } else if (e.target.className == 'calc-btn')
    updateScreenContent(e.target.innerText);
};

const applyHover = (key) => {
  const btn = document.getElementById(`btn${key}`);
  btn.style.background = '#a0a5ab';
};

const restoreBtnStyle = (e) => {
  if (e.key >= '0' && e.key <= '9') {
    const btn = document.getElementById(`btn${e.key}`);
    btn.removeAttribute('style');
  }
};
const updateScreenContent = (digit) => {
  if (screen.textContent == 0) screen.textContent = digit;
  else screen.textContent += digit;
};

const clearScreenContent = () => (screen.textContent = '0');

const delLastDigit = () => {
  const s = screen.textContent;
  const len = s.length;
  if (len == 1) screen.textContent = 0;
  else screen.textContent = s.substring(0, len - 1);
};

calc.addEventListener('click', updateScreen);
document.addEventListener('keydown', updateScreen);
document.addEventListener('keyup', restoreBtnStyle);
