import Backbone from 'backbone';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/clubs',
    idAttribute: 'objectId',

    defaults: {
        name: '',
        description: '',
    },
    addMessageToClub({message, email}) {
        this.save({
            Messages: this.get('Messages').concat([{
                ___class: 'messages',
                body: message,
                email: email,
            }])
        });
    },
    addBookToFuture() {
        this.save({
            Future: this.get('Future').concat([{
                ___class: 'future',
                
            }])
        });
    },
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
