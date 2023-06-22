import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("test for loading header logo", () => {
  const header = render(
	<StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
	</StaticRouter>
  );
//   console.log(header);

  //load logo
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

test("cart should have 0-items loading header", () => {
	const header = render(
	  <StaticRouter>
	  <Provider store={store}>
		<Header />
	  </Provider>
	  </StaticRouter>
	);
  
	//testing the cart have 0 items or not
	const cart = header.getByTestId("cartTest");
	expect(cart.innerHTML).toBe(" cart - 0");
  });
  