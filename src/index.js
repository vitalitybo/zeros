module.exports = function getZerosCount(number) {
  let count = 0;

  for (let i = 1; (number / (Math.pow(5, i)) ) >= 1; i++) {
    count += Math.floor(number / (Math.pow(5, i)));
  }

  return count;
}
