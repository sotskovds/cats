setTimeout(() => {

  fetch(`${window.location.href}photos/files.json`, { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
  .then((res) => res.json())
  .then((files) => {
    const randomNumber = getRandomNumberBetween(0, files.length - 1);
    console.log(randomNumber);
    window.location.href = `${window.location.href}photos/${files[randomNumber].filename}`;
    console.log(files[randomNumber]);
   })
  .catch((e) => console.error(e));

  function getRandomNumberBetween(min, max) {
    const range = max - min + 1; // Calculate the range of the random number
    const randomNumber = Math.floor(Math.random() * range) + min; // Generate the random number
    return randomNumber;
  }
  
}, 100);