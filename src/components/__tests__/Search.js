import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from '../mocks/mockResListData.json'
import Body from '../Body';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


//ususal in js, fetch return promise, then we get again promise form .json. then we take data from it. likewise, we have to make the same.
beforeEach(async() => {
   
})
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it('render body compoent to get search', async() => {
    await act(async () => {
      render(<BrowserRouter><Body /></BrowserRouter>);
    });

    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn = screen.getByRole('button', {name: 'Search'});
    expect(searchBtn).toBeInTheDocument();
    
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, { target :{ value : 'Pizza'}})
    //onchange 2nd paramter is mocking the "e", hence we gng to target.value.
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId('resCard');
    expect(cards.length).toBe(1);

})
it('render body component to get top rated', async() => {
    await act(async () => {
      render(<BrowserRouter><Body /></BrowserRouter>);
    });

    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(9);
    const filterBtn = screen.getByRole('button', {name: 'Top Rated Restaurant'});
    expect(filterBtn).toBeInTheDocument();
    
    fireEvent.click(filterBtn);
    const cards = screen.getAllByTestId('resCard');
    expect(cards.length).toBe(5);

})