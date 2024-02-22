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
 *          -Img
 *          -Name of Res, Star Rating, cusine, delery tie
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

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0"
        }}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxYUb82L3RX5dgbZ_sPnFJGziaA3O3nqMQw&usqp=CAU"/>
            <h3>Vrindavan Restaurant</h3>
            <h4>Biryani, North Indian, Asian </h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
};

const Body = () => {
    return(
        <div className="Body">
            <div className="Search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
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

