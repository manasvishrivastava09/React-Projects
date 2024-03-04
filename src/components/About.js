import User from "./User";
import UserClass from './UserClass';
import { Component } from "react";


class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("Parent Component did mount");
    }

    render(){
        console.log("Parent Component did mount");
        return (
          <div>
            <h1>About Class Componnet</h1>
            <h2>This is my project</h2>
            <UserClass name={'Manasvi Shrivastava'} location={'Pune'} />
          </div>
        );
    }  
}
// const About = () =>{
//     return <div className="user-card">
//         <h1>About</h1>
//         <h2> This is Namaste React web series</h2>
//         {/* <User name={"Manasvi Shrivastava (fuction)"} /> */}

//         <UserClass name={"Manasvi Shrivastava (class)"}location={"Pune"}/>
//       </div>
    
// };

export default About;

