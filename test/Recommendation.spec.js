import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import Recommendation from "../src/Recommendation.svelte";

describe('Recommendation', () => {
  test('renders article name and price', () => {
    const recommendationOptions = { recommendation: {
        "_embedded": {
          "o:variation": {
            "name": "Jeans",
            "pricing": {
              "retailPrice": 9990
            }
          }
        }
      }};
    render(Recommendation, recommendationOptions);

    const articleName = screen.getByText('Jeans');
    const price = screen.getByText('99.90');

    expect(articleName).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
