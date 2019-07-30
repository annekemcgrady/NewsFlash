import { gifReducer } from "./gifReducer";

describe("gifReducer", () => {
  it("should return the initial state", () => {
    const expected = "";
    const result = gifReducer(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should return the gif url", () => {
    const addGIFAction = {
      type: "ADD_GIF",
      gifURL: "htttp fakey fake"
    };

    const expected = "htttp fakey fake";
    const result = gifReducer("", addGIFAction);
    expect(result).toEqual(expected);
  });
});
