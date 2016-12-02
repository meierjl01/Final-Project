import Backbone from 'backbone';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/clubs',
    idAttribute: 'objectId',

    defaults: {
        name: '',
        description: '',
        Past: [],
    },
    addMessageToClub({
        message,
        email
    }) {
        this.save({
            Messages: this.get('Messages').concat([{
                ___class: 'messages',
                body: message,
                email: email,
            }])
        });
    },

    addToFuture({
        title,
        rating,
        image,
        author
    }) {
        console.log('future', this.get('Future'));
        console.log('current', this.get('Current'));
        console.log('past', this.get('Past'));
        // var newFuture = this.get('Future').concat([{
        //           ___class: 'Books',
        //           title,
        //           rating,
        //           image,
        //           author,
        //       }])
        // console.log(newFuture);
        this.save({
            Future: this.get('Future').concat([{
                ___class: 'Books',
                title,
                rating,
                image,
                author,
            }])
        });
    },


    addToCurrent(objectId) {
        // console.log('future', this.get('Future'));
        // console.log('current', this.get('Current'));
        // console.log('read', this.get('Read'));
        var newFuture = this.get('Future').filter((Future, i, arr) => {
            if (objectId !== Future.objectId) {
                return true
            }
        })
        //pass in object ID of book itself if it's already existing -- keep everything if it's brand new
        var newCurrent = {
            ___class: 'Books',
            objectId
        }
        var newPast = this.get('Past').concat([{___class: 'Books', objectId: this.get('Current')[0].objectId}])
        // console.log('future', newFuture, 'current', newCurrent, 'past', newPast);
        // console.log(newPast);
        this.save({
                Future: newFuture,
                Current: newCurrent,
                Past: newPast
            })
            // this.save({
            //   current: [{
            //         ___class: 'Current',
            //         title,
            //         rating,
            //         image,
            //         author,
            //   }]
            // })
            // this.removeFromFuture({title})
    },
    // removeFromFuture({title}) {
    //   var newFuture = this.get('future').filter((future, i, arr) => {
    //     if(title !== future.title) {
    //         return true;
    //     }
    //   })
    //   this.save({
    //     future: newFuture
    //   })
    // },
    // addMessageToCurrent() {
    //
    // },
    addToRead({
      objectId
    }) {

        // this.save({
        //   read: this.get('read').concat([{
        //     ___class: 'Read',
        //     title,
        //     rating,
        //     image,
        //     author,
        //   }])
        // })
        // this.removeFromCurrent({title})
        // },
        // removeFromCurrent({title}) {
        //   var newCurrent = this.get('current').filter((current, i, arr) => {
        //     if(title !== current.title) {
        // return true;
        // }
        //     })
        //   this.save({
        //   current: newCurrent
        // })
    },
});
