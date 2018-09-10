import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

import axios from 'axios';

class ProfilesShow extends React.Component {
  state={

  }


  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`/api/profiles/${this.props.match.params.id}`)
      .then(res => this.setState({profile: res.data}, () =>
        console.log(this.state)));

  }

  handleDelete = () => {
    axios.delete(`/api/profiles/${this.props.match.params.id}`, Auth.bearerHeader())
      .then(() => this.props.history.push('/profiles'));
  }



  render() {
    const profile = this.state.profile;
    return(
      <section>
        {profile &&
          <div className="card has-text-centered">
            <h2 className="title is-2">{profile.username}</h2>
            {profile.releaseYear && <h3 className="subtitle is-3">({profile.firstName} {profile.lastName})</h3>}
            <img src={profile.profilePicUrl} />


            {/*            link to Projects here.
            create function to way whether id of user and id of profile are the same and alow access to  edit/delete functions:
            {!Auth.currentUserId()
            {!Auth.isAuthenticated()*/}

            <div className="columns">
              <div className="column is-half">
                <Link to={`/profiles/${profile._id}/edit`} className="button is-warning is-rounded">Edit</Link>
              </div>
              <div className="column is-half">
                <button onClick={this.handleDelete} className="button is-danger is-rounded">Delete</button>
              </div>
            </div>
          </div>
        }
      </section>
    );
  }

}

export default ProfilesShow;
