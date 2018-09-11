import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import ProfilesForm from './Form';

class ProfilesEdit extends React.Component {
  state= {}

  handleSubmit = (event) => {
    event.preventDefault();
    const profilesId = this.props.match.params.id;
    console.log('Form submitted!', this.state);
    console.log(this.props);
    axios.put(`/api/profiles/${profilesId}`, this.state, Auth.bearerHeader())
      .then(() => this.props.history.push(`/profiles/${profilesId}`));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get(`/api/profiles/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }

  render() {
    console.log('this.state is', this.state);
    return(
      <section>
        <h2 className="title is-2">Edit Profile</h2>
        <ProfilesForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          profile={this.state}
        />
      </section>
    );
  }
}

export default ProfilesEdit;
