import React from "react";
import renderer from "react-test-renderer";
import App from "../components/App.jsx";
import ProductOverview from "../components/ProductOverview/ProductOverview.jsx";
import SocialMedia from "../components/ProductOverview/SocialMedia.jsx";
import ImageGallery from "../components/ProductOverview/ImageGallery/ImageGallery.jsx";
import ProductInfo from "../components/ProductOverview/ProductInfo/ProductInfo.jsx";
import StyleSelector from "../components/ProductOverview/StyleSelector/StyleSelector.jsx";
import AddToCart from "../components/ProductOverview/AddToCart/AddToCart.jsx";
import {
  style,
  MainPic,
  product,
  id,
  ratings,
  numberOfReviews,
} from "./ProductOverviewTestStuff.js";

test("should render App component", () => {
  const tree = renderer.create(<App />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render ProductOverview component", () => {
  const tree = renderer.create(<ProductOverview product={product} id={id} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render ImageGallery component", () => {
  const tree = renderer.create(
    <ImageGallery mainPic={MainPic} style={style} />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render ProductInfo component", () => {
  const tree = renderer.create(
    <ProductInfo
      product={product}
      style={style}
      ratings={ratings}
      numberOfReviews={numberOfReviews}
    />
  );
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render Stryle Selector component", () => {
  const tree = renderer.create(<StyleSelector styles={[]} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render AddToCart component", () => {
  const tree = renderer.create(<AddToCart style={style} />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});

test("should render Social Media component", () => {
  const tree = renderer.create(<SocialMedia />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});
