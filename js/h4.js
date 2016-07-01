    /* WORK WITH CAMS */

function liTag() {
        $.get('http://h4l.paliy.lviv.ua/h4l/get_groups', function(data){
          if(data.state == 'ok' ){
            var arr = data.response;
            for (var i = 0; i < arr.length; i++) {
                $('#group_cams').append('<h4>' + arr[i].name + '</h4>');
                for (var q = 0; q < arr[i].cams.length; q++) {
                    $('#group_cams').append('<li openlist="' + arr[i].name + '" url="' + arr[i].cams[q].id + '"><img src="./img/cam_green.png" alt="">' + arr[i].cams[q].name + '</li>');
                }
            }
        } 
            
        /* open list in rightbar */
        function openListBar(){
            var groupLi = $(this).text();
            var li = $('li[openList="' + groupLi + '"]');
            $(li).stop();
            $(li).toggle('slow');
        }
        /* Show video online inside canvas*/
        function showVideo(){
                var span = $('.canvas[ready="true"]').next();
                var attr = $('.canvas[ready="true"]');
                var id_cam = $(this).attr('url');
                var data = {
                    id: id_cam
                }
                var id_canvas = $('.canvas[ready="true"]').attr('id');
                $.get('http://h4l.paliy.lviv.ua/h4l/get_cam_uri', data, function(data){
                  if(data.state == 'ok' ){
                    $(span).attr('openScreen', true)
                    var uri = data.response;
                    var client = new WebSocket(uri);
                    var canvas = document.getElementById(id_canvas);
                    var player = new jsmpeg(client, {
                        canvas: canvas
                    });
                    $('.canvas').css({
                        'border': '1px dashed #460800',
                    });
                    $('.canvas').attr('ready', false);
                  }else{
                      throw ("I can't to download by url")
                  }

              })
        }
        $('.tab h4').click(openListBar);
        $('.tab li').on('click', function(){
            if($('.canvas[ready="true"]').length != 0){
                showVideo();
            }
        });
      })
        
}
/* border around canvas */
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
$(document).ready(function(){
    liTag();
    $('.canvas').click(borderCanvas);
})
