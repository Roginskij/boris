var player;
$(document).ready(function() {
        getCamUri()
})
function getCamUri() {
    $.getJSON('/h4l/get_cam_uri',{},function(data) {
        console.log(data);
        uri = data.response;
        var client = new WebSocket(uri);
        var canvas = document.getElementById('vc1');
        player = new jsmpeg(client, {canvas:canvas});
        });
}
       
