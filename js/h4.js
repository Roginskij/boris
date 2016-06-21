var player;
$(document).ready(function () {

})

//function getCamUri() {
//    $.get('/h4l/get_group_ids', {}, function (data) {
//        console.log(data);
//        uri = data.response;
//        var client = new WebSocket(uri);
//        var canvas = document.getElementById('vc1');
//        player = new jsmpeg(client, {
//            canvas: canvas
//        });
//    });
//}

//function selectChange(){
//     $('.tab select').change(function () {
//        var val = $(this).val();
//        var url = $(this).parent().attr('uri');
//        var canvas = document.getElementById('vc'+val);
//        var client = new WebSocket(url);
//        player = new jsmpeg(client, {
//            canvas: canvas
//        });
//    })
//}


 /* WORK WITH CAMS */
    var grid_1 = '<div class="row_1"><div class="col-xs-12"><canvas id="vc1"></canvas></div></div>';
    var grid_2 = '<div class="row_2"><div class="col-xs-6"><canvas id="vc1"></canvas></div><div class="col-xs-6"><canvas id="vc2"></canvas></div></div><div class="row_2"><div class="col-xs-6"><canvas id="vc3"></canvas></div><div class="col-xs-6"><canvas id="vc4"></canvas></div></div>';
    var grid_3 = '<div class="row_3"><div class="col-xs-6"><canvas id="vc1"></canvas></div><div class="col-xs-6"><canvas id="vc2"></canvas></div></div><div class="row_3"><div class="col-xs-6"><canvas id="vc3"></canvas></div><div class="col-xs-6"><canvas id="vc4"></canvas></div></div><div class="row_3"><div class="col-xs-6"><canvas id="vc5"></canvas></div><div class="col-xs-6"><canvas id="vc6"></canvas></div></div>';
    
    /* event on change select */
    function selectChange(){
         $('.tab select').change(function () {
            var player;
            var val = $(this).val();
            var url = $(this).parent().attr('uri');
            var canvas = document.getElementById('vc'+val);
            var client = new WebSocket(url);
            player = new jsmpeg(client, {
                canvas: canvas
            });
             console.log(url)
        })
    }
    
    /* build li tag */
    function liTag(){
        var uri;
        $.get('/h4l/get_group_ids', {}, function (data) {
            uri = data.response;
            $('.tab li').remove();
            for( var i = 0; i < uri.length; i++){
                $('.tab').append('<li uri="' + uri[i] + '"><img src="./img/cam_green.png" alt="">Хлев<select name="" ><option value=""></option><option value="1">1</option></select></li>')
            }
            selectChange();
        });
        
    }
    liTag()
    /* build select */
    $('.listDisplay li').click(function(){
        var val = $(this).attr('val');
        var container = $('.grid');
        var selects;
        var count = 0;
        
        function selectsGrid(){
            $('.tab li select').html('<option  value=""></option>');
            for(var i = 0; i < parseFloat(val); i++){
                count++
                $('.tab li select').append('<option value="' + count + '">' + count + '</option>')
            }
        }
        switch (val){
            case '1':
                container.html(grid_1);
                selectsGrid();
                selectChange();
                break;
            case '4':
                console.log('work');
                container.html(grid_2);
                selectsGrid();
                selectChange();
                break;
            case '6':
                container.html(grid_3);
                selectsGrid();
                selectChange();
                break;
        }
    })