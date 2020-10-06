const numbers = [1,2,3,4,5,6,7,8,9,10];
const odds = numbers.filter(x => x%2 != 0);
const twoorfive = numbers.filter(x => x%2 ==0 || x %5 ==0);
const bythreesquared = numbers.filter(x => x%3 == 0).map(x => Math.pow(x,2));
const sumdivbyfivesquared = numbers.filter(x => x%5 == 0).map(x => Math.pow(x,2)).reduce((acc,total) => acc + total,0);

console.log(numbers);
console.log(odds);
console.log(twoorfive);
console.log(bythreesquared);
console.log(sumdivbyfivesquared);