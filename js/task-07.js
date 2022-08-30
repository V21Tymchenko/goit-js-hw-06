const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

// text.classList.add('abracadabra');
text.style.fontSize = '14px';

input.addEventListener('input', onTargetRangeChange);

function onTargetRangeChange(event) {
  const size = event.currentTarget.value;
  text.style.fontSize = size + 'px';
}
