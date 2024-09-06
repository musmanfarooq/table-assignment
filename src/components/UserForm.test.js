import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({});

describe("UserForm component", () => {
  test("renders the UserForm component", () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
