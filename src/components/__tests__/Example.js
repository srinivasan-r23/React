import { fireEvent, render, screen } from "@testing-library/react"
import ExampleComponent from "../Example"
import '@testing-library/jest-dom'

test('should render the Example component', () => {
    render(<ExampleComponent />);
    const button = screen.getAllByRole('button')[0];
    
    expect(button).toBeInTheDocument();

    fireEvent.click(button)
    const button1 = screen.getAllByRole('button')[1];
    
    expect(button1).toBeInTheDocument();

    fireEvent.click(button1)
    
})