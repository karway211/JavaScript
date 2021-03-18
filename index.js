const range = (min, max) =>
  BigInt(((max - min) + 1) * (min + max) / 2);

document.write(range(2, 356346363636));
console.log(range(2, 356346363636).toString());
