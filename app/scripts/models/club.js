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
                title,
                rating,
                image,
                author,
            }])
        });
    },
// filter (to remove from future) and add (to current)-- two methods
    addToCurrent({title, rating, image, author}){
      this.save({
        current: this.get('current').concat([{
              ___class: 'Current',
              title,
              rating,
              image,
              author,
        }])
      })
      this.removeFromFuture({title})
    },
    removeFromFuture({title}) {
      var newFuture = this.get('future').filter((future, i, arr) => {
        if(title !== future.title) {
            return true;
        }
      })
      this.save({
        future: newFuture
      })
    },
    // addMessageToCurrent() {
    //
    // },
    // addBookToRead() {
    //
    // }
});
