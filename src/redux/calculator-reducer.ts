export type initialStateType = typeof initialState;

const initialState = {
  result: "" as string | number,
  inputValue: "",
};

export const calculatorReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        inputValue: action.symbol,
      };
    case "MULTIPLY":
      return {
        ...state,
        
      };
    case "SQRT":
      return {
        ...state,
        result: Math.sqrt(eval(state.inputValue)),
      };
    case "PERCENT":
      return {
        ...state,
        result: eval(state.inputValue) / 100,
      };
    case "RESULT":
      return {
        ...state,
        // result: eval(state.inputValue),
        result: eval(state.inputValue),
      };
    case "CLEAR":
      return {
        ...state,
        inputValue: "",
        result: '',
      };
    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof changeNumber>
  | ReturnType<typeof multiply>
  | ReturnType<typeof sqrt>
  | ReturnType<typeof percent>
  | ReturnType<typeof result>
  | ReturnType<typeof clear>;

export const changeNumber = (symbol: string) => {
  return { type: "CHANGE_NUMBER", symbol }as const;
};

export const multiply = () => {
  return { type: "MULTIPLY" }as const;
};

export const sqrt = () => {
  return { type: "SQRT" }as const;
};

export const percent = () => {
  return { type: "PERCENT" }as const;
};

export const result = () => {
  return { type: "RESULT" }as const;
};

export const clear = () => {
  return { type: "CLEAR" }as const;
};
