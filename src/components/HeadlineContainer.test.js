import React from "react";
import HeadlineContainer from "./HeadlineContainer.js";
import { shallow } from "enzyme";

describe("HeadlineContainer", () => {
  let wrapper;
  let data = [{ title: "words", source: { name: "name" } }];

  it("should match the snapshot", () => {
    wrapper = shallow(<HeadlineContainer data={data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
