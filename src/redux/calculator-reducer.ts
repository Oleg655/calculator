export type initialStateType = typeof initialState;

const initialState = {
  result: "" as string | number,
  inputValue: "",
};
function calculate(fn: string | number) {
  const calcFn = new Function("return " + fn);
  return calcFn();
}

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

    case "SQRT":
      if (state.result) {
        return {
          ...state,
          result: Math.sqrt(+state.result),
        };
      }
      if (state.inputValue) {
        return {
          ...state,
          result: Math.sqrt(+state.inputValue),
        };
      }

      return state;

    case "PERCENT":
      if (state.result) {
        return {
          ...state,
          result: calculate(+state.result / 100),
        };
      }
      if (state.inputValue) {
        return {
          ...state,
          result: calculate(+state.inputValue / 100),
        };
      }

      return state;
    case "RESULT":
      if (!isFinite(calculate(state.inputValue))) {
        return {
          ...state,
          result: "Ошибка",
        };
      }
      if (!Number.isInteger(calculate(state.inputValue))) {
        return {
          ...state,
          result: calculate(state.inputValue).toFixed(2),
        };
      } else {
        return {
          ...state,
          result: calculate(state.inputValue),
        };
      }
    case "CLEAR":
      return {
        ...state,
        inputValue: "",
        result: "",
      };
    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof changeNumber>
  | ReturnType<typeof sqrt>
  | ReturnType<typeof percent>
  | ReturnType<typeof result>
  | ReturnType<typeof clear>;

export const changeNumber = (symbol: string) => {
  return { type: "CHANGE_NUMBER", symbol } as const;
};

export const sqrt = () => {
  return { type: "SQRT" } as const;
};

export const percent = () => {
  return { type: "PERCENT" } as const;
};

export const result = () => {
  return { type: "RESULT" } as const;
};

export const clear = () => {
  return { type: "CLEAR" } as const;
};
