import React from 'react';
import axios from 'axios';
// import _ from 'lodash';
// import { Link } from 'react-router-dom';
// import SearchBar from '../common/SearchBar';
// import FilterSelect from '../common/FilterSelect';
// import FilterSidebar from '../common/FilterSidebar';
// import Sorter from '../common/Sorter';
// import Options from '../../lib/Options';

class ProfilesIndex extends React.Component {
  state = {

  }
  componentDidMount() {
    console.log('Component mounted');
    axios.get('/api/profiles')
      .then(res => this.setState({ profile: res.data }));
  }

  render() {
    return (
      <section className="columns">
        <h1>index</h1>
      </section>
    );
  }
}
export default ProfilesIndex;
