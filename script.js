function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

    let result = '';

    for (let key in obj) {
        const [symbol, value] = obj[key];
        
        // Repeat the symbol while the number is greater than or equal to its value
        while (num >= value) {
            result += symbol;
            num -= value;
        }

        
        const nextIndex = parseInt(key) + 1;
        if (nextIndex in obj) {
            const [nextSymbol, nextValue] = obj[nextIndex];
            if (value - nextValue <= num && num < value) {
                result += nextSymbol + symbol;
                num -= (value - nextValue);
            }
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
