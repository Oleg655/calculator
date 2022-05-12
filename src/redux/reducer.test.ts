import {
  calculatorReducer,
  changeNumber,
  clear,
  initialStateType,
  percent,
  result,
  sqrt,
} from "./calculator-reducer";

let startState: initialStateType;

beforeEach(() => {
  startState = {
    result: "" as string | number,
    inputValue: "",
  };
});

test("correct symbols should be added in inputValue", () => {
  const str = "45";
  const action = changeNumber(str);

  const endState = calculatorReducer(startState, action);

  expect(endState.inputValue.length).toBe(2);
  expect(endState.inputValue).toBeDefined();
  expect(endState.result).toBeDefined();
  expect(endState.result).toEqual("");
  expect(endState.inputValue).toEqual("45");
});

test("inputValue should be clean up", () => {
  const action = clear();

  const endState = calculatorReducer(startState, action);

  expect(endState.inputValue.length).toBe(0);
  expect(endState.inputValue).toEqual("");
});

test("the result should be ", () => {
  startState = {
    result: "" as string | number,
    inputValue: "(2+4)*(9/3)-5.4",
  };
  const action = result();

  const endState = calculatorReducer(startState, action);
  expect(endState.result).toBeDefined();

});

test('the square shoud be', () => {
  startState = {
    result: 81,
    inputValue: '',
  };
  const action = sqrt();

  const endState = calculatorReducer(startState, action);

  expect(endState.result).toBe(9);
})

test('the percent shoud be', () => {
  startState = {
    result: 90,
    inputValue: '',
  };
  const action = percent();

  const endState = calculatorReducer(startState, action);

  expect(endState.result).toBe(0.90);
})
