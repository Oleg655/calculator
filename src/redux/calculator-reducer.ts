//const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0"];
const aperators = ["C", "√", "%", "/", "+", ",", "=", "-", "✕"];
type initialStateType = typeof initialState;



//const digits = createDigits();

const initialState = {
  result: 0,
  numbers: "",
  inputValue: 0,
};

export const calculatorReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        inputValue: action.text,
      };
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof changeNumber>;

export const changeNumber = (text: number) => {
  return { type: "CHANGE_NUMBER", text };
};
