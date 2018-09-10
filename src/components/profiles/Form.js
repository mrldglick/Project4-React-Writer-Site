import React from 'react';

function ProfilesForm({handleSubmit, handleChange, profile}) {
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <input className="input" name="name"
          value={profile.name || ''}
          onChange={handleChange}
          placeholder="e.g. Bob Wondermuncher"
        />
      </div>
      <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <input className="input" name="email"
          value={profile.email || ''}
          onChange={handleChange}
          placeholder="e.g. BobTheMuncher@yahoo.com"
        />
      </div>

      {/*
      <input
        name="password"
        type={this.state.passwordHidden? 'password' : 'text'}
        value={this.state.password || ''}
        onChange={this.handleChange}/>
      <span style={{ color: 'red' }}>{this.state.errors.password}</span>

      <input
        name="passwordConfirmation"
        type={this.state.passwordHidden? 'password' : 'text'}
        value={this.state.passwordConfirmation || ''}
        onChange={this.handleChange}
        placeholder="Confirm your password"/>
      <span style={{ color: 'red' }}>{this.state.errors.passwordConfirmation}</span> */}

      <div className="field">
        <label htmlFor="profilePicUrl" className="label">Profile Picture URL</label>
        <input className="input" name="profilePicUrl"
          value={profile.profilePicUrl || ''}
          onChange={handleChange}
          placeholder="e.g. http://...."
        />
      </div>
      <button className="button is-info is-outlined">Submit</button>
    </form>
  );
}

export default ProfilesForm;
