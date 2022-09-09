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

const meta = {
  Comfort: { id: 220232, value: "3.8143712574850299" },
  Fit: { id: 220230, value: "3.6167664670658683" },
  Length: { id: 220231, value: "3.7425149700598802" },
  Quality: { id: 220233, value: "3.7784431137724551" },
};

const stars = { 1: 28, 2: 14, 3: 28, 4: 156, 5: 90, total: 316 };
const average = 3.8;
const recc = 88;
const starFilter = { 1: false, 2: false, 3: false, 4: false, 5: false };

test("should render Ratings & Reviews index component", () => {
  const tree = renderer.create(<Index id={product.id} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render ReviewList component", () => {
  const tree = renderer.create(
    <ReviewList id={product.id} reviews={reviews} meta={meta} />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render RatingsOverview component", () => {
  const tree = renderer.create(
    <RatingsOverview
      stars={stars}
      average={average}
      meta={meta}
      recc={recc}
      starFilter={starFilter}
    />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});
