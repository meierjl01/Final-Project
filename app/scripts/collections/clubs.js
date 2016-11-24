import Backbone from 'backbone';
import Club from '../models/club';

export default Backbone.Collection.extend({
  model: Club,
  url: 'https://api.backendless.com/v1/data/clubs',
  parse(data) {
    return data.data;
  }
});
