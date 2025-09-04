import { capitalise } from "./index.js";
import { reverseString } from "./index.js";
import { calculator } from "./index.js";
import { caesarCipher } from "./index.js";
import { analyzeArray } from "./index.js";

test("capitalise exists", () => {
  expect(capitalise).toBeDefined();
});

test("capitalise returns a string", () => {
  const string = capitalise("string");

  expect(typeof string).toBe("string")
});


test("capitalise returns the same string", () => {
  const string = capitalise("banana");

  expect(string).toMatch(/banana/i)
});

test("capitalise returns a capitalised version of the string", () => {
  const string = capitalise("banana");

  expect(string).toBe("Banana")
});


//----------------------------------------------------------------


test("reverseString exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString to return something", () => {
  const string = reverseString("string");

  expect(string).toBeDefined();
  expect(string).not.toBeNull();
});

test("reverseString to return a string", () => {
  const string = reverseString("string");

  expect(typeof string).toBe("string");
});

test("reverseString to return a reversed string", () => {
  const string = reverseString("hello world");

  expect(string).toBe("dlrow olleh");
});

//-----------------------------------------------------------------


test("Calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("Calculator is an object", () => {
  expect(typeof calculator).toBe("object");
});

test("Calculator contains add", () => {
  expect(typeof calculator.add).toBe("function");
});

test("Calculator contains rest of functions", () => {
  expect(typeof calculator.subtract).toBe("function");
  expect(typeof calculator.divide).toBe("function");
  expect(typeof calculator.multiply).toBe("function");
});

test("Calculator's add returns a number", () => {
  expect(typeof calculator.add(2, 2)).toBe("number");
});

test("Calculator's add returns an addition result", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Calculator's rest of functions return a number", () => {
  expect(typeof calculator.subtract(2, 2)).toBe("number");
  expect(typeof calculator.divide(2, 2)).toBe("number");
  expect(typeof calculator.multiply(2, 2)).toBe("number");
});

test("Calculator's rest of functions return the correct output", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.multiply(2, 2)).toBe(4);
});


//----------------------------------------------------------------

test("caesarCipher exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher returns something", () => {
  const something = caesarCipher("string");
  expect(something).toBeDefined();
});

test("caesarCipher returns a string", () => {
  const something = caesarCipher("string");
  expect(typeof something).toBe("string");
});

test("caesarCipher returns the same string input if no key", () => {
  const something = caesarCipher("string");
  expect(something).toBe("string");
});

test("caesarCipher returns the same string but shifted based on the key", () => {
  const something = caesarCipher("abc", 3);
  expect(something).toBe("def");
});

test("caesarCipher can deal with spaces", () => {
  const something = caesarCipher("a b ce", 3);
  expect(something).toBe("d e fh");
});

test("caesarCipher can deal with capitals", () => {
  const something = caesarCipher("Ab c", 3);
  expect(something).toBe("De f");
});

test("caesarCipher can deal with special chars", () => {
  const something = caesarCipher("Ab !c", 3);
  expect(something).toBe("De !f");
});

test("caesarCipher can deal with numbers", () => {
  const something = caesarCipher("Ab !c3", 3);
  expect(something).toBe("De !f3");
});

test("caesarCipher can deal with rounding letters to the start", () => {
  const something = caesarCipher("abcdefghijklmnopqrstuvwxyzabc", 3);
  expect(something).toBe("defghijklmnopqrstuvwxyzabcdef");
});

//----------------------------------------------------------

test("analyzeArray exists" , () => {
  expect(analyzeArray).toBeDefined();
});

test("analyzeArray takes an array and returns an object", () =>{
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe("object");
})


test("analyzeArray returns an objecgt with the average of the array", () =>{
  const object = analyzeArray([1, 8, 3, 4, 2, 6])
  expect(object.average).toBe(4);
})

test("analyzeArray returns the max of the array", () =>{
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
})

test("analyzeArray returns the min of the array", () =>{
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
})

test("analyzeArray returns the min of the array", () =>{
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.length).toBe(6);
})
