
// https://www.sitepoint.com/delay-sleep-pause-wait/

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

console.log("Hello");
sleep(2000);
console.log("World!");
