import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service.js';

$(document).ready(function () {
  $('#gifSearch').click(function () {
    let type = $("input[name=query]:checked").val();
    let key = $('#search').val();
    $('#search').val("");
    let promise = GiphyService.getGif(type, key);
    promise.then(function (response) {
      const body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $('#display').append("<img src ='" + body.data[i].images.original.url + "'/>");
        $('.showErrors').text("");
      }
    }, function (error) {
      $('.showErrors').text('There was an error processing your request: ${error}');
      $('#display').text("");
    });
  });
});