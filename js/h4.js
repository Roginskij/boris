    /* WORK WITH CAMS */
    
    /* build li tag groups and cams*/
    function liTag(){
        var arr;
        arr = '{"state":"ok","response":[{"id":1,"name":"Ферма","cams":[{"id":1, "name":"поросята"},{"id":2, "name":"телята"}]},{"id":2,"name":"Охорона","cams":[{"id":3, "name":"ворота"},{"id":4, "name":"пес"}]}]}';
        arr = JSON.parse(arr);
        arr = arr.response;
            $('#group_cams li').remove();
            for( var i = 0; i < arr.length; i++){
                $('#group_cams').append('<h4>' + arr[i].name + '</h4>');
                for (var q = 0; q < arr[i].cams.length; q++){
                    $('#group_cams').append('<li url="' + arr[i].cams[q].id + '"><img src="./img/cam_green.png" alt="">' + arr[i].cams[q].name + '</li>');
                }
            }
    }

    /* drag and drop cams to canvas tag */
    function drug(){
        $( "#group_cams li" ).draggable({
            revert:true
        });

        $( ".canvas" ).droppable({
          drop: function( event, ui ) {
              if($(this).hasClass('canvas')){
                  var id = ui.draggable.attr('url');
                  var text = ui.draggable.text();
                  var id_canvas = $(this).attr('id');
                  var data = {
                      id: id
                  }
                  $.get('/get_cam_uri', data, function(data){
                      if(data.state == 'ok'){
                        var uri = data.response;
                        var client = new WebSocket(uri);
                        var canvas = document.getElementById(id_canvas);
                        var player = new jsmpeg(client, {
                            canvas: canvas
                        });
                      }else{
                          throw ("I can't to download by url")
                      }
                  })
              }
          }
        });
    }
    /* build select */
    
