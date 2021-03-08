module.exports = function reverse (n) {
var res = 0;
if (n<0){
n=n*(-1);
}
  while (n) {
    res = res * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return res;
    }

