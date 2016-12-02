import React from 'react';
import PastBooksList from './pastbookslist';

export default React.createClass({
  render() {
    console.log(this.props.Past);
    let Past = this.props.Past.map((Past, i, arr) => {
      return (
        <PastBooksList key={Past.objectId} Past={Past} />
      )
    })
    return (
      <div>
        <h3>Past Books</h3>
          {Past}
      </div>
    )
  }
});
