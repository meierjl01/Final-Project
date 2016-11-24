import Backbone from 'backbone';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/clubs',
    idAttribute: 'objectId',

    defaults: {
      name: '',
      description: '',
      currentBook: '',
      pastBooks: [],
      futureBooks: [],
      messages: [],
    }
});
