import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma/css/bulma.css'; // Needs to change when Heroku-ing
import './scss/style.scss';

// Components
import SecureRoute from './components/common/SecureRoute';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

import ProfilesIndex from './components/profiles/Index';
import ProfilesShow from './components/profiles/Show';
import ProfilesEdit from './components/profiles/Edit';

import ProjectsIndex from './components/projects/Index';
import ProjectsShow from './components/projects/Show';
import ProjectsNew from './components/projects/New';
import ProjectsEdit from './components/projects/Edit';

import ChaptersIndex from './components/chapters/Index';
import ChaptersShow from './components/chapters/Show';
import ChaptersNew from './components/chapters/New';
import ChaptersEdit from './components/chapters/Edit';

//
class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>


          {/* Insert Home route */}

          <Route exact path="/login" component={AuthLogin} />
          <Route exact path="/register" component={AuthRegister} />

          <Route path="/profile/:id" component={ProfilesShow} />
          <SecureRoute path="profile/:id/edit" component={ProfilesEdit} />
          <Route exact path="/profile" component={ProfilesIndex} />
          {/*  change the 'id's' to be uniquie to the components 
          <Route exact path="/profile/:id/projects" component={ProjectsIndex} />
          <SecureRoute exact path="/profile/:id/projects/new" component={ProjectsNew} />
          <SecureRoute path="/profile/:id/projects/:id/edit" component={ProjectsEdit} />
          <Route path="/profile/:id/projects/:id" component={ProjectsShow} />

          <Route exact path="/profile/:id/projects/:id/chapters" component={ChaptersIndex} />
          <SecureRoute exact path="/profile/:id/projects/:id/chapters/new" component={ChaptersNew} />
          <SecureRoute path="/profile/:id/projects/:id/chapters/:id/edit" component={ChaptersEdit} />
          <Route path="/profile/:id/projects/:id/chapters/:id" component={ChaptersShow} />
          */}
        </Switch>
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
