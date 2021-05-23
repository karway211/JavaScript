const access_key = '969a83caf013a35fa598c66eef3efccf';
const base = document.querySelector('.base');
const symbol = document.querySelector('.symbol');
export const getBaseData = async () => {
  try {
    const date = document.querySelector('input[type="date"]').value;
    const response = await fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=${access_key}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export const getSymbolData = async (...arg) => {
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
