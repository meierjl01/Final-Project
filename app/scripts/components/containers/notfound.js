import React from 'react';
import {Link} from 'react-router';

export default React.createClass ({
  render() {
    return (
      <div className="not-found">
        <h3>Sorry. That page cannot be found. Please click <Link to="/clubs">here</Link> to go to our home page.</h3>
      </div>
    );
  },
});
