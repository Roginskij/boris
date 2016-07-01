    /* WORK WITH CAMS */
    /* build li tag groups and cams*/
    function liTag() {
        $.get('/h4l/get_groups', function(data){
          if(data.state == 'ok' ){
            var arr = data.response;
//            $('#group_cams li').remove();
            for (var i = 0; i < arr.length; i++) {
                $('#group_cams').append('<h4>' + arr[i].name + '</h4>');
                for (var q = 0; q < arr[i].cams.length; q++) {
                    $('#group_cams').append('<li url="' + arr[i].cams[q].id + '"><img src="./img/cam_green.png" alt="">' + arr[i].cams[q].name + '</li>');
                }
            }
          }
      })
    }
/* Show video online inside */
function showVideo(){
        var attr = $('.canvas[ready="true"]');
        var id_cam = $(this).attr('url');
        var data = {
            id: id_cam
        }
        var id_canvas = $('.canvas[ready="true"]').attr('id');
        $.get('/h4l/get_cam_uri', data, function(data){
          if(data.state == 'ok' ){
            var uri = data.response;
            var client = new WebSocket(uri);
            var canvas = document.getElementById(id_canvas);
            var player = new jsmpeg(client, {
                canvas: canvas
            });
            $('.canvas').css({
                'border': '1px dashed #460800',
            });
          }else{
              throw ("I can't to download by url")
          }

      })
    
}
/* border dashed on canvas block with "ready" - attr */
function borderCanvas(){
    var _this = this;
    var id_canvas = $(this).attr('id');
    var attr = $(this).attr('ready');

    if(attr == "false"){
        $('.canvas').attr('ready', false);
        $('.canvas').css({
            'border': '1px dashed #460800',
        })
        $(_this).css({
            'border': '2px dashed #00eaff',
        })
        $(_this).attr('ready', true);
    }else if(attr == 'true'){
        $(this).css({
            'border': '1px dashed #460800',
        });
        $(this).attr('ready', false); 
    }
}


