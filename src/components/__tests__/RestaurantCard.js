import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'

it('should render RestaurantCard component with props data', () => {
    const WithPromotedLabel = withPromotedLabel(RestaurantCard)
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText('Pizza Hut');

    expect(name).toBeInTheDocument();

    render(<WithPromotedLabel resData={MOCK_DATA}/>)

})