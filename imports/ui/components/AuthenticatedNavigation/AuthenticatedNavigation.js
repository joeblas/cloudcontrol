import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import '../Navigation/Navigation.scss';

const AuthenticatedNavigation = ({ name, history }) => (
  <div>
    <Nav>
      <LinkContainer to="/invoices">
        <NavItem eventKey={1} href="/invoices">Invoices</NavItem>
      </LinkContainer>
      <LinkContainer to="/recipients">
        <NavItem eventKey={1} href="/recipients">Recipients</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={2} title={name} id="user-nav-dropdown">
        <LinkContainer to="/profile">
          <NavItem eventKey={2.1} href="/profile">Profile</NavItem>
        </LinkContainer>
        <MenuItem divider />
        <MenuItem eventKey={2.2} onClick={() => history.push('/logout')}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default withRouter(AuthenticatedNavigation);
