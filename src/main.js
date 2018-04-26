import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { giphyApi } from './scripts.js';

$(document).ready(function() {
  $('#butt').click(function() {
    let giphyCall = new giphyApi();
    let promise = giphyCall.apiCall();

    promise.then(function(response) {
      let body = JSON.parse(response);
      let images = body.data.images.original.url;
      $('.showImg').html(`<img src='${images}' />`);
    }, function(error) {
      $('#errorText').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
