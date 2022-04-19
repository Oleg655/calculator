type initialStateType = typeof initialState;

const initialState = {
  result: '' as string | number,
  numbers: "",
  inputValue: "",
};

export const calculatorReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      debugger
      return {
        ...state,
        inputValue: action.symbol,
      };
    case "MULTIPLY":
      return {
        ...state,
      };
      case "SQRT":
        return{
          ...state,
          result: Math.sqrt(eval(state.inputValue))
        }
    case "PERCENT":
      return {
        ...state,
        result: eval(state.inputValue)/100
      };
    case "RESULT":
      return {
        ...state,
        result: eval(state.inputValue),
      };
    case "CLEAR":
      return {
        ...state,
        inputValue: "",
      };
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof changeNumber>;

export const changeNumber = (symbol: string) => {
  debugger
  return { type: "CHANGE_NUMBER", symbol };
};

export const multiply = () => {
  return { type: "MULTIPLY" };
};

export const sqrt = () => {
  return { type: "SQRT" };
};

export const percent = () => {
  return { type: "PERCENT" };
};

export const result = () => {
  return { type: "RESULT" };
};

export const clear = () => {
  return { type: "CLEAR" };
};
