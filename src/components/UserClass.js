import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          userInfo: {
            name: 'Dummy',
            location: 'Default',
            avatar_url:"http://dummy.com"
          },
        };
    }
    async componentDidMount(){
        // console.log("Component did mount in child");
        const data = await fetch(
          "https://api.github.com/users/manasvishrivastava09"
        );
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log("did update");
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    render(){

        const {name,location,avatar_url} = this.state.userInfo;
        return (
          <div className="user-card">
            <img className="prof-img" src= {avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @manasvi09</h4>
          </div>
        );
    }
}

export default UserClass;
