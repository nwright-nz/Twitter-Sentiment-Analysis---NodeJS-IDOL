(function($, window) {
    
    var socket = io.connect();

    var sentimentAttachers = {};
    var sentiments = {};

    socket.on('message', function (data) {

        console.log("Received tweet " + data.tweetId);

        var table = $("#resultsTable")[0];
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        if (data.image) {
            cell1.innerHTML = '<input type="hidden" class="tweetId" value="'+data.tweetId + '">' + "<img src='" + data.profileUrl + "'>" + data.message + "<p><img src='" + data.image + "'style='width:25%;height=25%' >";
        }
        else {
            cell1.innerHTML = '<input type="hidden" class="tweetId" value="' + data.tweetId + '">' + "<img src='" + data.profileUrl + "'>" + data.message + "<p>";
        }
        
        function attachSentiment(data) {
            var cell2 = row.insertCell(1);
            cell2.innerHTML = '<input type="hidden" class="tweetId" value="' + data.tweetId + '">' + '<p>' + data.sentiment + '</p>';
        }

        if (sentiments[data.tweetId]) {
            attachSentiment(sentiments[data.tweetId]);
        } else {
            sentimentAttachers[data.tweetId] = attachSentiment;
        }
        console.log(data.message);
    });

    socket.on('newsentiment', function (data) {
        console.log("Received sentiment '" + data.sentiment + "' for " + data.tweetId);
        console.log("Orphans: " + JSON.stringify(sentiments) + JSON.stringify(sentimentAttachers));
        if (sentimentAttachers[data.tweetId]) {
            sentimentAttachers[data.tweetId](data);
        } else {
            sentiments[data.tweetId] = data;
        }
    });
    
    function runSearch() {
        $("#resultsTable tr").remove();
        var searchTerm = $('input#term').val();
        socket.emit('search', { 'search': searchTerm });
    }

    function setUpPage() {
        $("button#search").on('click', runSearch);
        
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    };

    $(setUpPage);

})(jQuery, window);