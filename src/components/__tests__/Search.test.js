import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/dummyData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-UI");

  expect(shimmer.children.length).toBe(16);
});

test("search button should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchBtn = body.getByTestId("search-btn");
  console.log(searchBtn);
});

test("should search work proper on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("restaurant-list")));

  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(15);
});

