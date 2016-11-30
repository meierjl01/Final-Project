import Backbone from 'backbone';
import Message from '../models/message';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Message,
  // 
  // addMessage({message, timestamp}) {
  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://api.backendless.com/v1/data/messages',
  //     contentType: 'application/json',
  //     data: JSON.stringify({
  //       message,
  //       timestamp,
  //     }),
  //     success: () => {
  //       console.log('message saved');
  //     }
  //   });
  // },
  // parse: (data) => {
  //   return data.data;
  // }
});
