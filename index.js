const randn_bm = () => {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};

const getObjectGauss = (num, func) => {
  // для вывода полученного массива и полученного объекта:
  const newArr = Array.from({ length: num }, func);
  console.log(newArr);
  const objectGauss = newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log(objectGauss);
  return objectGauss;

  // короткое решение:
  // return Array.from({ length: num }, func)
  //   .reduce((acc, el) => {
  //     acc[el] = (acc[el] || 0) + 1;
  //     return acc;
  //   }, {});
}

getObjectGauss(10, randn_bm);
