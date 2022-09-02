import React from "react";
import { document, render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import QuestionList from "../Questionlist.jsx";

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

test("simple test", () => {
  expect(true).toBe(true);
});

test("should render QuestionList component", () => {
  const tree = renderer.create(<QuestionList product="product" />).toJSON();
  expect(tree).not.toBeNull();
});
