import { screen, render } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

const MockComponent = () => <div>abc</div>;
const EnhancedComponent = withPromotedLabel(MockComponent);

describe('Restaurant card test', () => {
  it('Should have RestaurantCard component with props Data', () => {
    const resData = { info: MOCK_DATA };
    render(<RestaurantCard resData={resData} />);

    const name = screen.getByText('UBQ by Barbeque Nation');

    expect(name).toBeInTheDocument();
  });

  it('should render RestaurantCard component with Promoted Label', () => {
    render(<EnhancedComponent />);

    const label = screen.getByText('Offer valid');

    expect(label).toBeInTheDocument();

    expect(label).toHaveTextContent('Offer valid');
  });
});
