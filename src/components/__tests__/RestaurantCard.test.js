import { screen, render } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

it('Should have RestaurantCard component with props Data', () => {
    const resData = {info:MOCK_DATA}
  render(<RestaurantCard resData={resData} />);

  const name = screen.getByText('UBQ by Barbeque Nation');

  expect(name).toBeInTheDocument();
});
