import React from "react";
import renderer, { act } from "react-test-renderer";
import ProductOverview from "../Questionlist.jsx";

test("should render QuestionList component", () => {
  const tree = renderer.create(<QuestionList product={{ id: 65631 }} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});
