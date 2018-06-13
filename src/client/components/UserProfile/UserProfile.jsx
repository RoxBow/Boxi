import '../../styles/_userProfile.scss';
import React from 'react';
import axios from 'axios';
class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const _this = this;

    axios
      .get('/user/fetchUserInformation')
      .then(res => {
        _this.setState(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { email } = this.state;

    return (
      <div className="user-profile">
        <h2>User profile</h2>
        <p>Username: {email}</p>
      </div>
    );
  }
}

export default UserProfile;
