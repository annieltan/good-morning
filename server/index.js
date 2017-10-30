var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path = require('path');
var port = process.env.PORT || 8081
// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  url = 'http://quotespill.com/motivational-morning-messages/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var data, quote
      var quotes = [];

      $('blockquote').filter(function(){
        data = $(this);
        quote = data.children().first().text().trim();
        quotes.push(quote);
      })
    }

    fs.writeFile('output.json', JSON.stringify(quotes), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen(port)
console.log('Magic happens on port 8081');
exports = module.exports = app;
