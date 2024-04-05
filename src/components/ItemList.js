import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem} from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        // Dispatch an action
        dispatch(addItem(item));
    };

    return (
      <div>
        {items.map((item) => (
          <div
          data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <div className="font-semibold">
                  <span>{item.card.info.name}</span>
                </div>
                <div>
                  <span>
                    🪙{' '}
                    {(item.card.info.price ?? item.card.info.defaultPrice) /
                      100}{' '}
                    ₹{' '}
                  </span>
                  <span>
                    
                      ⭐{' '} {item.card.info.ratings.aggregatedRating.rating}

                  </span>
                </div>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 my-[100px] rounded-lg bg-black opacity-70 text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >Add +</button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </div>
    );
};

export default ItemList;
