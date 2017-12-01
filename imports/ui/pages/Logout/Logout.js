import React from 'react';
import Icon from '../../components/Icon/Icon';

import './Logout.scss';

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="Logout">
  
        <h1>You have successfully logged out.</h1>
     
      </div>
    );
  }
}

Logout.propTypes = {};

export default Logout;
