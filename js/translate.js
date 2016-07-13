$(document).ready(function(){
//    translateContent();
    var lan = JSON.parse(window.localStorage.getItem('setup')).lang;
    var arr = $('.translate');
    var i = arr.length;
    (function _text(i) {
        var elem = $(arr[i]);
        var req = 'http://h4l.paliy.lviv.ua/h4l/translate?language=' + lan + '&phrase=' + $(elem).text() + ''
        if (i<arr.length) {
           $.post(req, function(data){
                if(data.state == 'ok'){
                    $(elem).text(data.response);
                    _text(i+1);
                }else{
                    throw ("Cant't to translate phrase" , data.state, data.response);
                    console.log(data);
                    _text(i+1);
                }
            })
        }
    })(0);
    
    var arr_hint = $('.translate_hint');
    var j = arr_hint.length;
    
    (function _text_hint(i) {
        var elem = $(arr_hint[i]);
        var req = 'http://h4l.paliy.lviv.ua/h4l/translate?language=' + lan + '&phrase=' + $(elem).attr('title') + ''
        if (i<arr_hint.length) {
           $.post(req, function(data){
                if(data.state == 'ok'){
                    $(elem).attr('title', data.response);
                    _text_hint(i+1);
                }else{
                    throw ("Cant't to translate phrase" , data.state, data.response);
                    console.log(data);
                    _text_hint(i+1);
                }
            })
        }
    })(0);
})