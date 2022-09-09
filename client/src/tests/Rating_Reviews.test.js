import React from "react";
import renderer from "react-test-renderer";
import App from "../components/App.jsx";
import Index from "../components/Ratings_Reviews/Index.jsx";
import ReviewList from "../components/Ratings_Reviews/Reviews/ReviewList.jsx";
import RatingsOverview from "../components/Ratings_Reviews/Ratings/RatingsOverview.jsx";

const product = { id: 65631 };
const reviews = [
  {
    body: "DON'T IT!!! REPORTED REVIEWS CANT BE SEEN!! OH NOOOOO!",
    date: "2022-05-25T00:00:00.000Z",
    helpfulness: 59,
    photos: [],
    rating: 5,
    recommend: true,
    response: null,
    review_id: 1274546,
    reviewer_name: "Dinthebeen",
    summary: "PLEASE DON'T REPORT ME",
  },
];

test("should render App component", () => {
  const tree = renderer.create(<App />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

// test("should render Ratings & Reviews index component", () => {
//   const tree = renderer.create(<Index id={product.id} />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });

// test("should render ReviewList component", () => {
//   const tree = renderer.create(<ReviewList
//     reviews={reviews}
//     meta={}
//      />);
//   expect(tree).not.toBeNull();
//   tree.unmount();
//   tree.unstable_flushSync();
// });
