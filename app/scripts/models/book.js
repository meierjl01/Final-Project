import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: 'objectId',
  // urlRoot: 'https://api.backendless.com/v1/data/books',
  defaults: {
    bookmessages: [],
  },
  // addMessageToBook({
  //             message,
  //             objectId,
  //             email
  //         }) {
  //             console.log(this.get('bookmessages'));
  //             //update book and then fetch the club again
  //             //need to send a complete property of the book you're changing
  //             //ajax request to book with all of messages associated with that bookmessages
  //
  //             //save request to book messages endpoint
  //             this.save({
  //                 bookmessages: this.get('bookmessages').concat([{
  //                     ___class: 'BookMessages',
  //                     message,
  //                     objectId,
  //                     email,
  //                 }])
  //             });
  //
  //         },
});
