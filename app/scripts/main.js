import ReactDom from 'react-dom';
import store from './store';
import $ from 'jquery';
import config from './config';
import converter from './xmlconverter';
import router from './router';

$.ajax({
  url: 'https://goodreadsproxyserver.herokuapp.com/search/index.xml',
  type: 'GET',
  dataType: 'xml',
  data: {
    q: 'Ender\'s Game',
    key: 'ltifc503kqbqMU5MfwaXA'
  },
  success: (response) => {
      var result = converter.xml2json(response);
      console.log(result);
  }
});


const container = document.getElementById('container');

ReactDom.render(router, container);
