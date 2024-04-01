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

    render(){

        const {name,location,avatar_url} = this.state.userInfo;
        return (
          <div className="m-9 h-[600px] w-[450px] border border-black bg-slate-400 rounded-xl ">
            <img className="h-[450px] w-500px]" src= {avatar_url}/>
            <div className="text-center my-9">
            <h2 className="font-bold"> {name}</h2>
            <h3 className="font-bold"> {location}</h3>
            <h4 className="font-bold"> @manasvishrivastava09</h4>
            </div>
          </div>
        );
    }
}

export default UserClass;
