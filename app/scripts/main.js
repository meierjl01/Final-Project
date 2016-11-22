import $ from 'jquery';

$.ajax({
  url: 'https://www.goodreads.com/search/index.xml',
  data: {
    q: 'Ender\'s Game',
    key: 'ltifc503kqbqMU5MfwaXA'
  },
  success: (response) => {
    console.log(response)
  }
});
