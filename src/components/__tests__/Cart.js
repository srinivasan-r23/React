import { fireEvent,  render,  screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import MOCK_DATA from '../mocks/resMenu.json';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
it('Should load Restaurant Menu', async() => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText('Veg Pizza (14)');
    fireEvent.click(accordionHeader);
    const itemList = screen.getAllByTestId('foodItems');
    expect(itemList.length).toBe(90);
    fireEvent.click(accordionHeader);

})