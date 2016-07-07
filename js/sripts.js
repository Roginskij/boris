var domain = 'http://h4l.paliy.lviv.ua';
//var domain = '';
$(document).ready(function () {
    
    /* time at the top menu */
    setInterval(function(){
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var date = new Date();
        var time = date.getHours().toString() + ':' + addZero(date.getMinutes().toString()) + ':' + addZero(date.getSeconds().toString());
        $('#time').text(time);
    }, 1000)
    /* right bar nav, click on <li> will open list with text */
    $('.open_tab').click(function(e){
        var ifOn = $(this).next().css('display');
        if(ifOn == 'block'){
            $(this).next().hide('slow');
        }else{
            $('.tab').hide('slow');
            $(this).next().show('slow');
        }
    })
    /* open top menu */
    $('.top_button').click(function(){
        var menu = $('.menu');
        var ifOn = $(menu).css('top');
        for(var i = 0; i < menu.length; i++){
            if( ifOn == '-67px'){
                $('.arrow_top').css({"transform":"rotate(90deg)"})
                $(menu).animate({
                    'top': '30px'
                })
            }else{
                $('.arrow_top').css({"transform":"rotate(-90deg)"})
                $(menu).animate({
                    'top': '-67px'
                })
                $('.menu_5').next().hide('slow');
            }
        }
    })
    /* open right bar */
    $('.right_arrow_menu').click(function(){
        var block = $('#bar_nav').css('right');
        if(block == '-220px'){
            $('.arrow_top_bar').css({"transform":"rotate(180deg)"});
            $('#bar_nav').animate({
                'right': '10px'
            })
        }else{
            $('.arrow_top_bar').css({"transform":"rotate(0deg)"});
            $('#bar_nav').animate({
                'right': '-220px'
            })
        }
    })
    /* big button */
    $('.button_big').click(function (e) {
        e.preventDefault();
        var button = $(this).children().next();
        for (var i = 0; i < button.length; i++) {
            if($(button[i]).attr('turn') == 'off' || $(button[i]).attr('turn') == ''){
                $(button[i]).stop();
                $(button[i]).animate({
                    'left': '60px',
                    'width': '66px'
                }, 500);
                $(button[i]).attr('turn', 'on');
            }else{
                $(button[i]).stop();
                $(button[i]).animate({
                    'left': '1px',
                    'width': '123px'
                }, 500);
                $(button[i]).attr('turn', 'off');
            }
            
        }

    })
    
    $('.img_button').click(function(e){
        if($(this).attr("turn") == 'off'){
            $(this).css({'transform': 'rotate(0deg)'})
            $(this).attr('turn', 'on');
        }else{
            $(this).css({'transform': 'rotate(17deg)'})
            $(this).attr('turn', 'off');
        }
        
    })
    
    $('.button_big_onoff').click(function(e){
        var button = $(this).children();
        var but_attr = $(button).attr('turn');
        for(var i = 0; i < button.length; i++){
            if( but_attr == "off"){
                $(button[i]).stop();
                $(button[i]).animate({
                    'left': '25px'
                }, 500);
                $(button).attr('turn', 'on');
                
            }else{
               $(button[i]).stop();
               $(button[i]).animate({
                    'left': '1px'
                }, 500);
                $(button).attr('turn', 'off');
            }
            
        }
    })
    /* SETUP page, tabs */
    $('.tabs').click(function(event){
        event.preventDefault();
        var tab = $(this).attr('section');
        var tabs = $('.tabs');
        for(var i = 0; i < tabs.length; i++){
            var sections = $(tabs[i]).attr('section');
            $(document.getElementById(sections)).hide();
        }
        $(document.getElementById(tab)).show();
    })
    
    $('.button').click(function(){
        var button = $(this).children();
        var but_attr = $(button).attr('turn');
        for(var i = 0; i < button.length; i++){
            if(but_attr == "off"){
                $(button[i]).animate({
                    'left': "25px",
                    'width': '34px'
                });
                $(button).attr('turn', 'on');
            }else{
                $(button[i]).animate({
                    'left': "1px",
                    'width': '58px' 
                });
                $(button).attr('turn', 'off');
            }
        }
    })
    
    /* open grids list with display */
    $('.menu_5').click(function(e){
        e.preventDefault();
        $(this).next().stop();
        $(this).next().toggle('slow');
    })
    
    /* grid sistem 1x1 2x2 3x3 */
    var grid_1 = '<div class="row_1"><div class="col-xs-12"><canvas class="canvas" id="vc1" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div>';
    var grid_2 = '<div class="row_2"><div class="col-xs-6"><canvas class="canvas" id="vc1" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-6"><canvas class="canvas" id="vc2" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div><div class="row_2"><div class="col-xs-6"><canvas class="canvas" id="vc3" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-6"><canvas class="canvas" id="vc4" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div>';
    
    var grid_3 = '<div class="row_3"><div class="col-xs-4"><canvas class="canvas" id="vc1" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc2" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc3" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div><div class="row_3"><div class="col-xs-4"><canvas class="canvas" id="vc4" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc5" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc6" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div><div class="row_3"><div class="col-xs-4"><canvas class="canvas" id="vc7" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc8" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div><div class="col-xs-4"><canvas class="canvas" id="vc9" ready="false"></canvas><span class="fullScreen" fullScreen="false" openScreen="false"></span></div></div>';
    
    /* fuulScreen canvas */
    var className; // class for fullscreen option
    function fullScreen(){
        if($(this).attr('fullScreen') == 'false' && $(this).attr('openScreen') == 'true'){
            className = $(this).parent().attr('class');
            $(this).parent().removeClass();
            $(this).prev().addClass('fullscreen');
            $(this).attr('fullScreen', true);
        }else{
            $(this).parent().addClass(className);
            $(this).prev().removeClass('fullscreen');
            $(this).attr('fullScreen', false);
        }
    }
    
    
    $('.listDisplay li').click(function(){
        $('.listDisplay').hide('slow');
        var val = $(this).attr('val');
        var container = $('.grid');
        
        switch (val){
            case '1':
                container.html(grid_1);
                $('.canvas').click(borderCanvas);
                $('.fullScreen').click(fullScreen)
                break;
            case '4':
                container.html(grid_2);
                $('.canvas').click(borderCanvas);
                $('.fullScreen').click(fullScreen)
                break;
            case '9':
                container.html(grid_3);
                $('.canvas').click(borderCanvas);
                $('.fullScreen').click(fullScreen)
                break;
        }
    })
    
    /* FULLSCREEN CANVAS */
    $('.fullScreen').click(fullScreen)
    
    /* RELOCATION TO A SETUP PAGE */
    var domain = window.location.origin;
    $('.menu_1').click(function(e){
        e.preventDefault();
        window.location.replace(domain + "/setup.html");
    })
    
})




























