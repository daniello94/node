function randomArray(min, max, n) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var myArray = [];
  var arrayMax = n;
 
  for (var i = 0; i < arrayMax; i++) {
    myArray.push(Math.floor(Math.random() * (max - min) + min));
  }
  return myArray

}
module.exports = randomArray
  // console.log(randomNumber(10,200));



