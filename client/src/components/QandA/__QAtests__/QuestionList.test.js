import { render, screen, cleanup } from "@testing-library.react";
import renderer from "react-test-renderer";
import Questionlist from "../Questionlist.jsx";

test("should render QuestionList component", () => {
  const component = renderer.create(<QuestionList />);
  expect(component).toMatchSnapshot();
});
