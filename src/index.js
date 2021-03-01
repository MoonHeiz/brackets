module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for(let symbol of str){
        if(symbol === stack[stack.length - 1]){
            stack.pop();
            continue;
        }

        const found = bracketsConfig.find(subarray => symbol === subarray[0]);

        if(found){
            stack.push(found[1]);
        }
        else return false;
    }
  
    return stack.length === 0 ? true : false;   
}