import React from "react";
import { HeadlineCard, mapDispatchToProps } from "./HeadlineCard.js";
import { shallow } from "enzyme";
import { addGIF, addError } from "../actions";

describe("HeadlineCard", () => {
  let wrapper;
  let data = { title: "words", author: "author" };

  it("should match the snapshot", () => {
    wrapper = shallow(<HeadlineCard data={data} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with a setGIF action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addGIF("http");
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setGIF("http");
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a setError action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addError("error");
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setError("error");
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
