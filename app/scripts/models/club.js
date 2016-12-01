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
    addToFuture({title, rating, image, author}) {
        this.save({
            future: this.get('future').concat([{
                ___class: 'Future',
                title: title,
                rating: rating,
                image: image,
                author: author,
            }])
        });
    },
    // addBookToCurrent(){
    //filter (to remove from future) and add (to current)-- two methods
    // },
    // addMessageToCurrent() {
    //
    // },
    // addBookToRead() {
    //
    // }
});
