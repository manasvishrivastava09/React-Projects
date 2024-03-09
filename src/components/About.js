import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}

export default About;
