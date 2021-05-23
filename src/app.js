const base = document.querySelector('.base');
const symbol = document.querySelector('.symbol');
const access_key = '969a83caf013a35fa598c66eef3efccf';
const getBaseData = async () => {
  try {
    const date = document.querySelector('input[type="date"]').value;
    const response = await fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=${access_key}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const getSymbolData = async (...arg) => {
  try {
    const date = document.querySelector('input[type="date"]').value;
    const args = arg.join();
    const response = await fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=${access_key}&symbols=${args}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const formatNumber = (number) => {
  return number > 9 ? number : `0${number}`;
}

getCurrentDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = formatNumber(date.getMonth() + 1);
  const currentDayOfTheMonth = formatNumber(date.getDate());
  const currentDate = `${currentYear}-${currentMonth}-${currentDayOfTheMonth}`;
  return currentDate;
}

const dateControl = document.querySelector('input[type="date"]');
dateControl.value = getCurrentDate();

const baseBth = document.querySelector('.base-bth');
const symbolBth = document.querySelector('.symbol-bth');
const baseList = document.querySelector('.base-list');
const symbolList = document.querySelector('.symbol-list');

const changeErrorBlock = (err = '') => {
  const errorWrap = document.querySelector('.error');
  const errorBlock = document.querySelector('.error-message');
  if (!err) {
    errorWrap.style.display = 'none';
    errorBlock.innerHTML = '';
  } else {
    errorWrap.style.display = 'flex';
    errorBlock.innerHTML = err;
  }
}

const start = async () => {
  try {
    const controlList = document.querySelector('.symbol-control__list');
    const data = await getBaseData();
    if (data.error) {
      changeErrorBlock(data.error.message);
      return null;
    } else {
      Object.keys(data.rates).forEach(key => {
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = key;
        checkbox.name = key;
        const label = document.createElement('label');
        label.for = key;
        label.innerHTML = key;
        div.append(checkbox, label);
        controlList.appendChild(div);
      });
    }
  } catch (error) {
    changeErrorBlock(error);
  }
};
start();

const onBaseBthHandler = async () => {
  while (baseList.firstChild) {
    baseList.removeChild(baseList.firstChild);
  }
  try {
    const data = await getBaseData();
    if (data.error) {
      changeErrorBlock(data.error.message);
      return null;
    } else {
      const rates = await data.rates;
      Object.keys(data.rates).forEach(key => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${key}: ${rates[key]}`;
        baseList.appendChild(listItem);
      });
    }
  } catch (error) {
    changeErrorBlock(error);
  }
};
baseBth.addEventListener('click', onBaseBthHandler);


getControlCheckbox = async () => {
  try {
    const controlList = document.querySelector('.symbol-control__list');
    if (controlList.classList.contains('show')) {
      while (symbolList.firstChild) {
        symbolList.removeChild(symbolList.firstChild);
      }
      controlList.classList.remove('show');
      const inputs = document.querySelectorAll('input[type="checkbox"]');
      const symbols = Array.from(inputs).filter(el => {
        return el.checked;
      }).map(el => el.name);
      if (symbols.length) {
        const data = await getSymbolData(...symbols);
        if (data.error) {
          changeErrorBlock(data.error.message);
          return null;
        } else {
          const rates = data.rates;
          Object.keys(data.rates).forEach(key => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${key}: ${rates[key]}`;
            symbolList.appendChild(listItem);
          });
        }
      }
    } else {
      controlList.classList.add('show');
    }
  } catch (err) {
    changeErrorBlock(err);
  }
}

symbolBth.addEventListener('click', getControlCheckbox);

const errorBth = document.querySelector('.error-bth');
errorBth.onclick = () => changeErrorBlock();
