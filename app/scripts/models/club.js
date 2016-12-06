import Backbone from 'backbone';
import browserHistory from 'react-router';
import $ from 'jquery';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/clubs',
    idAttribute: 'objectId',

    defaults: {
        name: '',
        description: '',
        Past: [],
        Current: [],
    },

    addMessageToBook({
        message,
        email,
        bookId
    }) {
        // console.log(this.get('bookmessages'));
        let bookmessages;
        if (this.get('bookmessages')) {
            bookmessages = this.get('bookmessages').concat([{
                message,
                email,
                ___class: 'BookMessages'
            }])
        } else {
            bookmessages = [{
                ___class: 'BookMessages',
                message,
                email
            }]
        }
        $.ajax({
            type: 'PUT',
            url: `https://api.backendless.com/v1/data/Books/${bookId}`,
            contentType: 'application/json',
            data: JSON.stringify({
                bookmessages
            }),
            success: (response) => {
                // console.log('book message saved successfully');
                this.fetch(response);
            }
        })
    },
//add another argument to the function that's a callback -- success callback
//it would set state to fetching is false on that component
//invoke it when ssuccess happens
//fetching is false to start out -- click button -- when the below function is successfull set state again


//in click handler:
    addMessageToClub({
        message,
        email
    }) {
        // console.log(this);
        this.save({
            Messages: this.get('Messages').concat([{
                ___class: 'messages',
                message,
                email,
            }])
        });
    },
    deleteMessage(objectId) {
        var newMessages = this.get('Messages').filter((Message, i, arr) => {
            if (objectId !== Message.objectId) {
                return true
            }
        })
        this.save({
            Messages: newMessages,
        }, {
            success: () => {
                $.ajax({
                    type: 'DELETE',
                    url: `https://api.backendless.com/v1/data/messages/${objectId}`,
                    success: () => {
                        console.log('message deleted')
                    },
                    error: () => {
                        console.log('message delete didn\'t work');
                    }
                })
            }
        })
    },
    deleteBookMessage(objectId) {
      // console.log(this.get('Current')[0].bookmessages);
        var newbookmessages = this.get('Current')[0].bookmessages.filter((bookmessages, i, arr) => {
            if (objectId !== bookmessages.objectId) {
                return true
            }
        })
        if (newbookmessages.length === 0) {
          newbookmessages = null
        }
        console.log(newbookmessages);
        this.save({
            bookmessages: newbookmessages,
        }, {
            success: () => {
                $.ajax({
                    type: 'DELETE',
                    url: `https://api.backendless.com/v1/data/BookMessages/${objectId}`,
                    success: (response) => {
                        console.log('book message deleted')
                        this.fetch(response);
                    },
                    error: () => {
                        console.log('book message delete didn\'t work');
                    }
                })
            }
        })
    },
    saveEditedBookMessage({
        message,
        messageId
    }) {
        $.ajax({
            type: 'PUT',
            url: `https://api.backendless.com/v1/data/BookMessages/${messageId}`,
            contentType: 'application/json',
            data: JSON.stringify({
                message,
            }),
            success: (response) => {
                console.log('message edited', this.get('Current')[0].bookmessages);
                this.fetch(response)
            }
        });
    },
    saveEditedClubMessage({
        message,
        objectId
    }) {
        $.ajax({
            type: 'PUT',
            url: `https://api.backendless.com/v1/data/messages/${objectId}`,
            contentType: 'application/json',
            data: JSON.stringify({
                message,
            }),
            success: (response) => {
                // console.log('message edited', this.get('Messages'));
                this.fetch(response)
            }
        });
    },

    addToFuture({
        title,
        rating,
        image,
        author
    }) {
        this.save({
            Future: this.get('Future').concat([{
                ___class: 'Books',
                title,
                rating,
                image,
                author,
            }])
        });
        // browserHistory.push("/clubs/:name/futurebooks");
    },
    addToCurrent(objectId) {
        var newFuture = this.get('Future').filter((Future, i, arr) => {
            if (objectId !== Future.objectId) {
                return true
            }
        })

        var newCurrent = {
            ___class: 'Books',
            objectId
        }

        let newPast;

        if (this.get('Current')[0]) {
            if (this.get('Current')[0].objectId === this.get('Current')[0].objectId) {

                newPast = this.get('Past').concat([{
                    ___class: 'Books',
                    objectId: this.get('Current')[0].objectId
                }])

            }
        }
        // console.log('future', newFuture, 'current', newCurrent, 'past', newPast);
        this.save({
            Future: newFuture,
            Current: newCurrent,
            Past: newPast
        })
    },

    addToPast({
        objectId
    }) {
        let newPast;
        // this.get('Current')[0].objectId}
        if (this.get('Past')[0]) {
            newPast = this.get('Past').concat([{
                ___class: 'Books',
                objectId
            }])
        } else {
            newPast = [{
                ___class: 'Books',
                objectId: this.get('Current')[0].objectId,
            }]
        }
        let newCurrent = [];

        this.save({
            Past: newPast,
            Current: newCurrent
        })
    },
});
