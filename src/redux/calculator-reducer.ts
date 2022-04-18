
type initialStateType = typeof initialState;

// const createDigits = () => {
//   const digits = [];
//   for (let i = 1; i < 10; i++) {
//     digits.push(
//      i
//     );
//   }
//   return digits;
// };
//const digits = createDigits();
const symbols = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0","C", "√", "%", "/", "+", ",", "=", "-", "✕"];

const initialState = {
  result: 0,
  numbers: "",
  inputValue: '',
  buttons: [...symbols]
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
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof changeNumber>;

export const changeNumber = (symbol: string) => {
  return { type: "CHANGE_NUMBER", symbol };
};
