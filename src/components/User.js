import {useState} from "react";

const User = ({name}) =>{
    const [count] = useState(0);
    const [count2] = useState(1);

    return <div className="user-card">
        <h2>Count : {count}</h2>
        <h2>Count : {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @manasvi09</h4>
    </div>
}

export default User;