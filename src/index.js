export function capitalise(string){
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

export function reverseString(str){
    return str.split("").reverse().join("");
}

export let calculator = {
    add: function(a, b){
        return a+b;
    },

    subtract: function(a, b){
        return a-b;
    },

    divide: function(a, b){
        return a/b;
    },

    multiply: function(a, b){
        return a*b;
    }
}

export function caesarCipher(string, key = 0) {
  const cypherList = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Skip numbers and special characters
    if (isNumberOrSpecialChar(char)) {
      cypherList.push(char);
      continue;
    }

    const base = isUpperCase(char) ? 65 : 97; // ASCII code for 'A' or 'a'
    const shiftedCharCode = ((char.charCodeAt(0) - base + key + 26) % 26) + base; 
    cypherList.push(String.fromCharCode(shiftedCharCode));
  }

  return cypherList.join("");
}

// Helper: checks if a char is uppercase
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

// Helper: checks if a char is a number or special character
function isNumberOrSpecialChar(char) {
  return /[^a-zA-Z]/.test(char);
}



export function analyzeArray(array){
  if (array.length === 0){
    return "object is empty";
  } 
  let object = {};

  object["average"] = calculatorAvg(array);
  object["max"] = Math.max(...array);
  object["min"] = Math.min(...array);
  object["length"] = Math.min(array.length);

  return object;
}


function calculatorAvg(arr){
  const sum = arr.reduce((sum, curr) => sum + curr, 0);

  return sum/arr.length;
}