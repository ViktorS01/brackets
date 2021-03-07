module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++){

    for (let j = 0; j < bracketsConfig.length; j++){

      if (bracketsConfig[j][0] === bracketsConfig[j][1]){
        if (str[i] == bracketsConfig[j][0]){
          if (str[i] == stack[stack.length - 1]){
            stack.pop();
            break;
          }
          else{
            stack.push(str[i]);
            break;
          }
        }
      }

      if ((stack.length == 0 && str[i] == bracketsConfig[j][1])){
        return false;
      }

      if (str[i] == bracketsConfig[j][0]){
        stack.push(str[i]);
      }

      if (str[i] === bracketsConfig[j][1] && stack.length != 0){

        if (stack[stack.length - 1] == bracketsConfig[j][0]){
          stack.pop();
        }
        else{
          return false;
        }

      }
      
    }

  }

  if (stack.length != 0){
    return false;
  }
  return true;
}