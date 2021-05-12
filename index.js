const round = (a, b) => a - a % b;

const subtraction = (a, b) => a - b;

const subtractionAsync = async (a, b) => {
  await new Promise(res => {
    setTimeout(() => res(), round(5000 * Math.random(), 1000));
  })
  return a - b;
}
const addition = (a, b) => a + b;

const additionAsync = async (a, b) => {
  await new Promise(res => {
    setTimeout(() => res(), round(5000 * Math.random(), 1000));
  })
  return a + b;
}
const multiplication = (a, b) => a * b;

const multiplicationAsync = async (a, b) => {
  await new Promise(res => {
    setTimeout(() => res(), round(5000 * Math.random(), 1000));
  })
  return a * b;
}
const division = (a, b) => a / b;

const divisionAsync = async (a, b) => {
  await new Promise(res => {
    setTimeout(() => res(), round(5000 * Math.random(), 1000));
  })
  return a / b;
}

const calc = str => {
  const operations = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division,
  };
  return str && str.split(/\s+/)
    .reduce((acc, el) => {
      return (el in operations) ? [...acc.slice(0, -2), operations[el](...acc.slice(-2))]
        : [...acc, +el]
    }, []).pop();
};

const calcAsync = async (str) => {
  let arr = str && str.split(/\s+/);
  let newArr = [];
  const operations = {
    '+': additionAsync,
    '-': subtractionAsync,
    '*': multiplicationAsync,
    '/': divisionAsync,
  };
  if (str) {
    for (let index = 0; index < arr.length; index++) {
      const el = arr[index];
      if (el in operations) {
        const newElem = await operations[el](...newArr.slice(-2));
        newArr = [...newArr.slice(0, -2), newElem];
      } else {
        newArr = [...newArr, +el];
      }
    }
  }
  const result = newArr.pop()
  console.log(result);
}

calcAsync('1 2 + 3 * 4 +');

console.log(calc('1 2 + 3 * 4 +'));
