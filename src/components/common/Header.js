
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Header extends React.Component {
  handleLogout = () => {
    Auth.removeToken();
    this.props.history.push('/');
  }
  render() {
    return(
      <header className="navbar">
        <Link className="navbar-item" to="/">Home</Link>

        {/* id has to be in `` and ${} */}
        {Auth.isAuthenticated() && <Link className="navbar-item" to={`/profile/${Auth.currentProfileId()}`}>Your Profile</Link>}
        {Auth.isAuthenticated() && <Link className="navbar-item" to={`/profile/${Auth.currentProfileId()}/projects`}>Your Projects</Link>}

        {Auth.isAuthenticated() && <Link className="navbar-item" to="/profile">Profile Index</Link>}

        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Sign up</Link>}
        {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Log Out {Auth.currentProfilename()}</a>}


      </header>
    );
  }
}

export default withRouter(Header);
