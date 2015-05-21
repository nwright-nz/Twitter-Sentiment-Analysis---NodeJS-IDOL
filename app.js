var express = require('express'),  twitter = require('twitter'), request = require('request'), http = require('http'), async = require('async'), sync = require('sync-request'), util = require('util');

function startServer(port) {
    var app = express();

    app.configure(function () {
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.static(__dirname + '/public'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
    });

   app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html');
    });

    var server = app.listen(port);
    console.log(util.format("Express server listening on port %s", port));

    return server;
}

function search(socket) {
    return function (data) {
        function extractTweetPrecis(tweet) {
            var image = (tweet.entities.media && tweet.entities.media[0].media_url) || tweet.entities.urls.url;
            return {
                tweetId: tweet.id,
                message: tweet.text,
                profileUrl: tweet.user.profile_image_url,
                image: image
            };
        }

        function analyzeSentiment(tweetPrecis) {
            function sanitize(message) {
                return message.replace(/\s+/g, '+').replace(/#/g, '+').replace(/\//g, '').replace("@", "").replace(/(http?:\/\/[^\s]+)/g, "").replace(/(http?:[^\s]+)/g, "");
            }

            function packageAndEmitTweetSentiment(tweetPrecis) {
                return function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        var bodyText = JSON.parse(body);
                        var sentiment = bodyText.aggregate.sentiment;
                        socket.emit('newsentiment', {
                            tweetId: tweetPrecis.tweetId,
                            sentiment: sentiment
                        });
                    } else {
                        console.log(util.format('Error calling IDOL service: HTTP %s %s. %s Failing tweet: %s', response.statusCode, response.statusMessage, response.body, JSON.stringify(tweetPrecis)));
                    }
                };
            }
            var cleanTweet = sanitize(tweetPrecis.message);
            var sentimentServiceUrl = util.format("https://api.idolondemand.com/1/api/sync/analyzesentiment/v1?text=%s&apikey=" + process.env.IDOL_API, cleanTweet);
            request(sentimentServiceUrl, packageAndEmitTweetSentiment(tweetPrecis));
        }

        var client = new twitter({
           
	    consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
            access_token_key: process.env.ACCESS_TOKEN_KEY,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET
        });

        var searchTerm = data.search;
        client.get('search/tweets', { q: searchTerm + ' since:2013-01-01', count: 20, language: 'en' }, function (error, tweets, response) {
            if (error) {
                for (var i = 0; i < error.length; i++) {
                    console.log(util.format('Error searching Twitter for term "%s": %s', searchTerm, error[i].message));
                }
                return;
            }
            for (var j = 0; j < tweets.statuses.length; j++) {
                var tweet = tweets.statuses[j];
                var tweetPrecis = extractTweetPrecis(tweet);
                socket.emit('message', tweetPrecis);
                analyzeSentiment(tweetPrecis);
            }
        });
    };
}

var server = startServer(process.env.VCAP_APP_PORT || 3000);
var io = require('socket.io').listen(server);

//io.sockets.on('connection', socket => {
io.sockets.on('connection', function (socket) {
    socket.on('search', search(socket));
});
//# sourceMappingURL=app.js.map
