import Backbone from 'backbone';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/clubs',
    idAttribute: 'objectId',

    defaults: {
        name: '',
        description: '',
        // currentBook: '',
        // pastBooks: [],
        // futureBooks: [],
    },
    addMessageToClub({message, timestamp}) {
        this.save({
            Messages: [{
                ___class: 'messages',
                body: message,
                timestamp: timestamp
            }]
        });
    },
    // addBookToFuture() {
    //
    // },
    // addBookToCurrent(){
    //
    // },
    // addMessageToCurrent() {
    //
    // },
    // addBookToRead() {
    //
    // }
});
