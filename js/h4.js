var player;
$(document).ready(function () {
    getCamUri();
    $('.tab select').change(function () {
        var val = $(this).val();
        var id = $(this).attr('id');
        var url = $('#' + id + ' :selected').attr('uri');
        var block = $('#vc' + val);
        var client = new WebSocket(url);
        player = new jsmpeg(client, {
            canvas: block
        });
    })
})

function getCamUri() {
    $.getJSON('/h4l/get_cam_uri', {}, function (data) {
        console.log(data);
        uri = data.response;
        var client = new WebSocket(uri);
        var canvas = document.getElementById('vc1');
        player = new jsmpeg(client, {
            canvas: canvas
        });
    });
}