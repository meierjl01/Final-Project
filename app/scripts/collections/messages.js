import Backbone from 'backbone';
import Message from '../models/message';

export default Backbone.Collection.extend({
  model: Message,
  url: 'https://api.backendless.com/v1/data/messages',
  parse(data) {
    return data.data;
  }
});
