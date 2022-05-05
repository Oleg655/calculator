// const arr = str.split("");

// arr.reduce((acc, item) => {
//     if(item === '+'){

//     }
//     acc.push(item)
//     return acc
// }, []);

// const func = function (string) {
//   const expression = [];
//   for (let i = 0; i < string.length; i++) {
//     let symbol = string.charAt(i);

//     if (symbol.match(/[0-9]/)) {
//       expression.push(+symbol);
//     } else {
//       expression.push(symbol);
//     }
//   }
//   expression.forEach((i) => {
//     if(i === '+'){
//       return  
//     }
//   });
//   return expression;
// };

// const func = (str) => {
//     const res = str.split('+')
//     let operation
//     if (str.replace(/[0-9]/g,'')){
//       operation = str.replace(/[0-9]/g,'')
//     }

//     return obj[operation](res)
//     console.log(res);
//     console.log(operation);
// }

// const obj ={
//   '+': (arr) => {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//       result = result + +arr[i]
//     }
//     console.log('rewrwerwerwerwerwe', result);
//     return result
//   }
// }

//console.log(func("1000+100"));

function calculate (fn) {
  return new Function('return ' + fn)()
}

console.log((calculate('100*100')/100));
