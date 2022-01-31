module.exports = function check(str, bracketsConfig) {
  let arrCompare = [];
  const staples = new Map(bracketsConfig);
      for (let i = 0; i <= str.length-1; i++) {
          if (str[i] === staples.get(arrCompare[arrCompare.length-1])) {
            arrCompare.pop();
          } else arrCompare.push(str[i]);
      }
      return arrCompare.length === 0;
  }