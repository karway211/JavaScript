import {
  changeErrorBlock,
  getCurrentDate,
  onBaseBthHandler,
  start,
  getControlCheckbox
} from "./handlers";
import { formatNumber } from "./helper";

const dateControl = document.querySelector('input[type="date"]');
dateControl.value = getCurrentDate(formatNumber);

const baseBth = document.querySelector('.base-bth');
const symbolBth = document.querySelector('.symbol-bth');

start();

baseBth.addEventListener('click', onBaseBthHandler);

symbolBth.addEventListener('click', getControlCheckbox);

const errorBth = document.querySelector('.error-bth');
errorBth.onclick = () => changeErrorBlock();
