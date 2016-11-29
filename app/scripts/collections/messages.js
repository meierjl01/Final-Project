import Backbone from 'backbone';
import Message from '../models/message';
import $ from 'jquery';

//ownerid for each message?

export default Backbone.Collection.extend({
  model: Message,

  addMessage({message, timestamp, ownerId}) {
    $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/data/messages',
      contentType: 'application-json',
      data: JSON.stringify({
        message,
        timestamp,
        ownerId,
      }),
      success: () => {
        console.log('message saved');
      }
    });
  }
});
