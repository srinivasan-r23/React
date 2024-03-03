import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import useOnlineStatus from "../../utils/useOnlineStatus";

describe("Header", () => {

  it("should load Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider
            value={{ user: "Test", setUserName: jest.fn() }}
          >
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton)
    const test = screen.getByText('Test');
    expect(test).toBeInTheDocument();

    fireEvent.click(loginButton)
    const test1 = screen.getByText('Login');
    expect(test1).toBeInTheDocument();

    const { result } = renderHook(useOnlineStatus);
    expect(result.current).toBeTruthy();
  });
 
});
