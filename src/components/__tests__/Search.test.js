import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it('Should filter top rated restaurant', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole('button', { name: 'search' });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'Burger' } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId('resCard');

  expect(cards.length).toBe(1);
  expect(searchBtn).toBeInTheDocument();
});

it('Should contain the body component with Search button', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId('resCard');
  expect(cardsAfterFilter.length).toBe(20);
});
