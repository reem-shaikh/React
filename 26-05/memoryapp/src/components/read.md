
function shuffle(arr) {
  let curr = arr.length,  randomIndex;

  while (curr != 0) {
    randomIndex = Math.floor(Math.random() * curr);
    curr--;

    [arr[curr], arr[randomIndex]] = [
      arr[randomIndex], arr[curr]];
  }

  return arr;
}