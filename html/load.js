function UrlExists(url, cb){
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
            cb.apply(this, [xhr.status]);
        }
    });
}

var int = setInterval(setup, 1000);
setup();

window.onhashchange = function() {
    window.location.reload(1);
}

function setup(){
    if (window.location.hash == '') {
        window.location.hash = 'test';
    }
    else {
        var key = location.hash.replace('#','');

        $("#name").html(key);

        UrlExists("/hls/" + key + ".m3u8", function(status){
            if(status === 200){
                $("#alert").hide();
                $("#player").append("<source src='/hls/" + key + ".m3u8' type='application/x-mpegURL' />");
                var player = videojs('#player');
                clearInterval(int);
            }
            else{
                $("#alert").show();
            }
        });
    }
}