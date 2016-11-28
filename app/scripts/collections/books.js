import converter from '../xmlconverter';
import Backbone from 'backbone';
import $ from 'jquery';
import Book from '../models/book';

export default Backbone.Collection.extend({
    model: Book,

    getBooks(title) {
        $.ajax({
            url: 'https://goodreadsproxyserver.herokuapp.com/search/index.xml',
            data: {
                q: title,
                key: 'ltifc503kqbqMU5MfwaXA',
            },
            success: (response) => {
                var result = converter.xml_str2json(response);
                this.reset();
                this.add(result.GoodreadsResponse.search.results.work);
                // console.log(result.GoodreadsResponse.search.results.work);
            }
        });
    }
});
