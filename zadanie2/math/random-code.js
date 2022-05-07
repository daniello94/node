function randomCode(quantity) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < quantity; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
module.exports = randomCode

//   console.log(makeid(4))
