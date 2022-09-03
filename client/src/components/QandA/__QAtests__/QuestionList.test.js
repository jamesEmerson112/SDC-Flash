import React from "react";
// import { act } from "react-dom/test-utils";
// import { render, screen, cleanup } from "@testing-library/react";
import renderer, { act } from "react-test-renderer";
import QuestionList from "../Questionlist.jsx";

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

test("should render QuestionList component", () => {
  const tree = renderer.create(<QuestionList product={{ id: 65631 }} />);
  expect(tree).not.toBeNull();
  tree.unmount();
});
