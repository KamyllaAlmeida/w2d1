var https = require('https');




function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
          //console.log('Chunk Received:', data + '\n');
          callback(data);

          //console.log(arrData);
        });

        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
          console.log('Response stream complete.');
        });

        //console.log("ARRAY:" + arrData);
  });
}



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);