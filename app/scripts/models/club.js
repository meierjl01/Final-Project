import Backbone from 'backbone';
import browserHistory from 'react-router';

export default Backbone.Model.extend({
            urlRoot: 'https://api.backendless.com/v1/data/clubs',
            idAttribute: 'objectId',

            defaults: {
                name: '',
                description: '',
                Past: [],
                Current: [],
            },
            addMessageToClub({
                message,
                email
            }) {
                // console.log(this);
                this.save({
                    Messages: this.get('Messages').concat([{
                        ___class: 'messages',
                        body: message,
                        email: email,
                    }])
                });
            },
            deleteMessage(objectId) {
                // Messages: this.get('Messages')
                console.log(this.get('Messages'));
                        var newMessages = this.get('Messages').filter((Message, i, arr) => {
                            if (objectId !== Message.objectId) {
                                return true
                            }
                        })
                        this.save({
                            Messages: newMessages,
                        })
                    },
                    addMessageToBook({
                        message,
                        objectId,
                        email
                    }) {
                        // console.log(this.get('bookmessages'));
                        this.save({
                            bookmessages: this.get('bookmessages').concat([{
                                ___class: 'BookMessages',
                                message,
                                objectId,
                                email,
                            }])
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
                        // console.log('future', this.get('Future'));
                        // console.log('current', this.get('Current'));
                        // console.log('read', this.get('Read'));
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

                        if (this.get('Current')[0].objectId === this.get('Current')[0].objectId) {

                            newPast = this.get('Past').concat([{
                                ___class: 'Books',
                                objectId: this.get('Current')[0].objectId
                            }])

                        }
                        // console.log('future', newFuture, 'current', newCurrent, 'past', newPast);
                        this.save({
                            Future: newFuture,
                            Current: newCurrent,
                            Past: newPast
                        })
                    },

                    addToRead({
                        objectId
                    }) {
                        console.log('future', this.get('Future'));
                        console.log('current', this.get('Current'));
                        console.log('past', this.get('Past'));

                        // this.get('Current')[0].objectId}
                        let newPast = this.get('Past').concat([{
                            ___class: 'Books',
                            objectId: objectId
                        }])

                        this.save({
                                Past: newPast
                            })
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
                    },
            });
