import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="well">
            <h3>Profile Page</h3>
            <p>User profile and account management will be implemented here.</p>
            <p><a href="/game" className="btn btn-default">Back to Game</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;