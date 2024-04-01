import { fireEvent, render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";

import Header from '../Header';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

it("Should load Header Component with a login button", () =>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();

});

it("Should render Header Components with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText(/Cart/);//using regex

  expect(CartItems).toBeInTheDocument();
});

it("Should render Header Components with cart items 0", ()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const CartItems = screen.getByText("🛒Cart (0)");

    expect(CartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", ()=>{
render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
  </BrowserRouter>
);

const loginButton = screen.getByRole("button", {name: "Login"});

fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", {name: "Logout"});

expect(logoutButton).toBeInTheDocument();
});