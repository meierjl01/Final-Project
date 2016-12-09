import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default React.createClass ({
  render() {
    return (
      <div className="app-container">
          <Header />
        {this.props.children}
          <Footer />
      </div>
    );
  },
});
