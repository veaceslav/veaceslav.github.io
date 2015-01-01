var gulp = require('gulp');
var http = require('http');
var gravatar = require('gravatar');
var yaml = require('yamljs');
var fs = require('fs');

// Get comments form Poole
gulp.task("default", function() {

  var options = {
    hostname: 'pooleapp.com',
    port: 80,
    path: '/data/bb27bcff-6b5b-45ef-a146-8a4e3f596f4b.json',
    method: 'GET'
  };

  http.get(options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
      var comments = JSON.parse(body);

      // add gravatar image links if available
      for (var i = 0; i < comments.sessions.length; i++) {
        comments.sessions[i].avatar = gravatar.url(comments.sessions[i].email, {s: '50', r: 'pg', d: '404'});
      }

      // convert the json to yaml and save it for jekyll to use.
      var ymlText = yaml.stringify(comments);
      fs.writeFile('_data/comments.yml', ymlText, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });

    });
  }).on('error', function(e) {
    console.log("Got error: ", e);
  });

});
