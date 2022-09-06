import React from "react";
import renderer from "react-test-renderer";
import App from "../components/App.jsx";
import QuestionList from "../components/QandA/Questionlist.jsx";
import Question from "../components/QandA/Question.jsx";
import AnswerList from "../components/QandA/AnswerList.jsx";
import Answer from "../components/QandA/Answer.jsx";
import QuestionForm from "../components/QandA/QuestionForm.jsx";
import AnswerForm from "../components/QandA/AnswerForm.jsx";
import testObj from "./testObj.js";
import questList from "../components/QandA/qAndA.js";

const product = { name: "Test Product", id: 65631 };
const question = testObj.question;
questList.push(question);
const answer = questList[0].answers["5987911"];
const question_id = 642996;

// test("should render App component", () => {
//   const tree = renderer.create(<App />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

// test("should render QuestionList component", () => {
//   const tree = renderer.create(<QuestionList product={product} />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

// test("should render Question component", () => {
//   const tree = renderer.create(<Question question={question} />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

// test("should render AnswerList component", () => {
//   const tree = renderer.create(<AnswerList />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

test("should render Answer component", () => {
  const tree = renderer.create(
    <Answer answer={answer} question_id={question_id} />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

// test("should render AnswerForm component", () => {
//   const tree = renderer.create(
//     <AnswerForm question={question} product={product} />
//   );
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

// test("should render QuestionForm component", () => {
//   const tree = renderer.create(<QuestionForm product={product} />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });
