const maxCallStack = () => maxCallStack();
maxCallStack();

document.addEventListener('click', function () { // memory leak
  console.log("memory leak");
});

const callback = () => {
  counter = 0; // memory leak
  return () => {
    counter++;
    console.log(counter);
  }
}
setInterval(callback(), 1000); // memory leak

const memoryLeak = () => {
  const date = new Date();
  return () => date;
}
