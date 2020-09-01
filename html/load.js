function UrlExists(url, cb){
    $.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
            cb.apply(this, [xhr.status]);
        }
    });
}

function load(stream) {
    location.hash = stream;
}

function listStreams() {
    $.ajax({
        type: "GET",
        url: "/stats",
        cache: false,
        dataType: "xml",
        success: function(xml) {
            $("#list").empty();

            streams = $(xml).find('stream');

            if (streams.length == 0) {
                $("#list").append("<span class='head-subtext'><i class='fa fa-info-circle'></i> Derzeit ist kein Livestream aktiv</span>");
            }
            else {
                if (location.hash == '') {
                    $("#list").append("<span class='head-subtext'><i class='fa fa-angle-double-right'></i> Wähle einen Stream:</span>");
                }

                $(xml).find('stream').each(function(){
                    var name = $(this).find("name").text()

                    $("#list").append(
                        "<button class=\"stream " + 
                        ((location.hash.replace('#','') == name) ? 'active' : '') + 
                        "\" onclick=\"load('" + 
                        name + 
                        "')\"><i class='fa fa-play-circle'></i> " + 
                        name + 
                        "</button>"
                    );
                });
            }
        }
    });
}

window.onhashchange = function() {
    window.location.reload(1);
}

var int = setInterval(listStreams, 5000);
listStreams();
setup();

function setup(){
    if (window.location.hash != '') {
        var key = location.hash.replace('#','');

        $("#stream-name").text(key);

        UrlExists("/hls/" + key + ".m3u8", function(status){
            if(status === 200){
                $("#alert").hide();
                $("#player").append("<source src='/hls/" + key + ".m3u8' type='application/x-mpegURL' />");
                var player = videojs('#player');
            }
            else{
                $("#alert").show();
                setTimeout(setup, 1000);
            }
        });
    }
}