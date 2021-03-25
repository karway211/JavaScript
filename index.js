const range = (min, max) => {
  const result = ((max - min) + 1) * (min + max) / 2;
  return Number.isInteger(min)
    && Number.isInteger(max)
    && max > min
    && max <= Number.MAX_SAFE_INTEGER
    && min <= Number.MAX_SAFE_INTEGER
    && (result > Number.MAX_SAFE_INTEGER
      ? BigInt(result)
      : result)
    || `Проверьте введенные данные:<br/>
         min < max;<br/>
         min == integer,<br/>
         max = integer;<br/>
         min <= Number.MAX_SAFE_INTEGER;<br/>
         min <= Number.MAX_SAFE_INTEGER;`
}

document.write(range(Number.MAX_SAFE_INTEGER - 1, Number.MAX_SAFE_INTEGER));
