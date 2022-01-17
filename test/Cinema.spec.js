import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/svelte'
import Cinema from '../src/Cinema.svelte'

describe('Get recos button', () => {
  test('renders', () => {
    render(Cinema);

    const button = screen.getByRole('button', { name: "Get recos" });

    expect(button).toBeEnabled();
  });

  describe('when clicking', () => {
    test('is disabled', async() => {
      render(Cinema);
      const button = screen.getByRole('button', { name: "Get recos" });

      await fireEvent.click(button);

      expect(button).toBeDisabled();
    });

    test('it renders cinema title', async() => {
      render(Cinema);
      const button = screen.getByRole('button', { name: "Get recos" });

      await fireEvent.click(button);

      const headline = screen.getByRole('heading', { name: "Reco cinema" })
      expect(headline).toBeInTheDocument();
    });

    test('it renders all recommendations', async() => {
      render(Cinema);
      const button = screen.getByRole('button', { name: "Get recos" });

      await fireEvent.click(button);

      const recommendations = screen.getAllByRole('listitem')
      expect(recommendations).toHaveLength(3);
    });
  });
});
