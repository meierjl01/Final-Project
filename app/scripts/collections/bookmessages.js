import Backbone from 'backbone';
import BookMessage from '../models/bookmessage';

export default Backbone.Collection.extend({
  model: BookMessage,
  url: 'https://api.backendless.com/v1/data/BookMessages',
  parse(data) {
    return data.data;
  }
});
