import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://api.backendless.com/v1/data/messages',

});
