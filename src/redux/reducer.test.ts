import {
  calculatorReducer,
  changeNumber,
  clear,
  initialStateType,
  result,
} from "./calculator-reducer";

let startState: initialStateType;

beforeEach(() => {
  startState = {
    result: "" ,
    inputValue: "",
  };
});

test("correct symbols should be added in inputValue", () => {
  const str = "45";
  const action = changeNumber(str);

  const endState = calculatorReducer(startState, action);

  expect(endState.inputValue.length).toBe(2);
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
  const action = result();

  const endState = calculatorReducer(startState, action);

  expect(endState.result).toBeDefined();
  expect(endState.inputValue).toEqual("");
});
