import React from 'react';
// import CurrentBookMessages from './currentbookmessages';

export default React.createClass({
  render() {
    console.log(this.props.current);
      let current = this.props.current.map((current, i, arr) => {
        return (
          <div key={i}>
            {this.props.current[0].title}
          </div>
        )
      })
      return (
      <div>
        <h3>Current Book</h3>
        {current}
        <h4>Messages: </h4>
      </div>
    )
  }
});
