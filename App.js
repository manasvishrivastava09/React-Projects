import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  -Loop
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantsCard
 * Footer
 *  -Copyright
 *      -Links
 *      -Address
 *  -Contact
 * 
 */

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://img.freepik.com/premium-vector/man-is-riding-scooter-delivery-logo-vector_396343-758.jpg?size=626&ext=jpg&uid=R46564419&ga=GA1.1.198370958.1708610606&semt=ais"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>🏠Home</li>
                    <li>📰About Us</li>
                    <li>📪Contact Us</li>
                    <li>🛒Cart</li>
                </ul>
            </div>
        </div>
    )
};

const Body = () => {
    return(
        <div>Body</div>
    )
};
const AppLayout = () => {
    return (
        <div className="app">
          <Header/>  
          <Body/>
        </div>
    )
       

    
}


const root = ReactDOM.createRoot
(document.getElementById("root"));

root.render(<AppLayout/>);

