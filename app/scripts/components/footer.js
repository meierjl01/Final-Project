import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-div">&copy;Jennifer Meier 2016</div>
        <nav className="footer-nav">
          <Link to = "https://www.linkedin.com/in/meierjl01" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
          <Link to = "https://github.com/meierjl01" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></Link>
        </nav>
      </footer>
    )
  }
});
