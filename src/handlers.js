import { getBaseData, getSymbolData } from "./api";

export const changeErrorBlock = (err = '') => {
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

export const start = async () => {
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

export const getCurrentDate = (formatNumber) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = formatNumber(date.getMonth() + 1);
  const currentDayOfTheMonth = formatNumber(date.getDate());
  const currentDate = `${currentYear}-${currentMonth}-${currentDayOfTheMonth}`;
  return currentDate;
}



export const onBaseBthHandler = async () => {
  const baseList = document.querySelector('.base-list');
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

export const getControlCheckbox = async () => {
  try {
    const symbolList = document.querySelector('.symbol-list');
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
