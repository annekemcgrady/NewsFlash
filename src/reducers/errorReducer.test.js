import { errorReducer } from "./errorReducer";

describe("errorReducer", () => {
  it("should return the initial state", () => {
    const expected = "";
    const result = errorReducer(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should return the error message", () => {
    const addErrorAction = {
      type: "ADD_ERROR",
      errorMsg: "error loading articles"
    };

    const expected = "error loading articles";
    const result = errorReducer("", addErrorAction);
    expect(result).toEqual(expected);
  });
});
