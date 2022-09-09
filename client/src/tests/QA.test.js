import React from "react";
import renderer from "react-test-renderer";
import App from "./App.jsx";
import QuestionList from "../Questionlist.jsx";
import Question from "../Question.jsx";
import AnswerList from "../AnswerList.jsx";
import Answer from "../Answer.jsx";
import QuestionForm from "../QuestionForm.jsx";
import AnswerForm from "../AnswerForm.jsx";
import testStuff from "./testStuff.js";
import questList from "../qAndA.js";


const product = { name: "Test Product", id: 65631 };
const question = testStuff.question;
questList.push(question);
const answer = questList[0].answers["5987911"];
const question_id = 642996;

test("should render App component", () => {
  const tree = renderer.create(<App />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});


test("should render QuestionList component", () => {
  const tree = renderer.create(<QuestionList product={product} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render Question component", () => {
  const tree = renderer.create(<Question question={question} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render AnswerList component", () => {
  const tree = renderer.create(<AnswerList />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render Answer component", () => {
  console.log(answer);
  const tree = renderer.create(
    <Answer answer={answer} question_id={question_id} />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render AnswerForm component", () => {
  const tree = renderer.create(
    <AnswerForm question={question} product={product} />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render QuestionForm component", () => {
  const tree = renderer.create(<QuestionForm product={product} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});
