import { Sum } from "../Sum"

test('Sum should calculate two numbers and return a sum', () => {
    const result = Sum(10, 20);

    //Assertion
    expect(result).toBe(30)
})