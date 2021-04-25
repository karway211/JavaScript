const data = {
  counter: 0,
}

const fruitNodeList = document.querySelectorAll('.fruit');

fruitNodeList.forEach(el => {
  const [span, input] = el.children;
  el.ondblclick = () => {
    span.style.display = 'none';
    input.style.display = 'inline-block';
    input.value = span.innerHTML;
    input.focus();
    input.onblur = () => {
      span.innerHTML = input.value;
      input.value = '';
      span.style.display = 'inline-block';
      input.style.display = 'none';
    }
  }
});

const head = document.querySelector('.fruits');
head.onclick = () => {
  data.counter++;
  const fruitNodeListSpan = document.querySelectorAll('.fruit>span');
  const arr = [];

  fruitNodeListSpan.forEach(el => arr.push(el.innerHTML));

  if (data.counter % 2) {
    arr.sort().reverse();
  } else {
    arr.sort();
  }
  fruitNodeListSpan.forEach(el => el.innerHTML = arr.pop());
}

