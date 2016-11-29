import Backbone from 'backbone';
import Message from '../models/message';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Message,

  addMessage({message, timestamp, ownerId}) {
    this.create(
      {message, timestamp, ownerId},
      {
        success: (response) => {
          this.add({response});
          console.log(response);
        }
      });
  },
  parse: (data) => {
    return data.data;
  }

  // addMessage({message, timestamp, ownerId}) {
  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://api.backendless.com/v1/data/messages',
  //     contentType: 'application-json',
  //     data: JSON.stringify({
  //       message,
  //       timestamp,
  //       ownerId,
  //     }),
  //     success: () => {
  //       console.log('message saved');
  //     }
  //   });
  // }
});
