import ReactDom from 'react-dom';
import store from './store';
import $ from 'jquery';
import config from './config';
import converter from './xmlconverter';
import router from './router';

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('goodreadsproxyserver') === -1) {
    // console.log('ajax send');

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
    xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
  }
});

// $.ajax({
//   url: 'https://goodreadsproxyserver.herokuapp.com/search/index.xml',
//   type: 'GET',
//   dataType: 'xml',
//   data: {
//     q: 'Ender\'s Game',
//     key: 'ltifc503kqbqMU5MfwaXA'
//   },
//   success: (response) => {
//       var result = converter.xml2json(response);
//       console.log(result.GoodreadsResponse.search.results.work);
//   }
// });


const container = document.getElementById('container');

ReactDom.render(router, container);
