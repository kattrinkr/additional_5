module.exports = function check(str, bracketsConfig) {
  var ArrayOfStr = str.split(''); //Разбиение на массив символов
  var brecketscl = [];
  var index = 0, n = 0;

  for (var i = 0; i < bracketsConfig.length; i++)
    brecketscl.push(bracketsConfig[i][0] + bracketsConfig[i][1]);

  while (true) {
    for (var i = 0; i <= brecketscl.length; i++) {
      index = str.indexOf(brecketscl[i]);
      if (index != -1) {
        ArrayOfStr.splice(index, 2);
        str = ArrayOfStr.join('');//Склеиваем массив в строку
      }
    }

    if (n === 50) break;
    n++;
  }
  var answer = true;
  if (ArrayOfStr.length === 0)
    return answer;
  else return !answer;


}
