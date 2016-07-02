function translateContent(){
    var arr = $('.translate');
    for(var i = 0; i < arr.length; i++){
        var lan = 'rus';
        var elem = $(arr[i])
        var req = '/h4l/translate?language=' + lan + '&phrase=' + $(elem).text() + ''
        $.post(req, function(data){
            if(data.state == 'ok'){
                $(elem).text(data.response);
            }else{
                throw (data.state, data.response)
            }
        })
    }
    
}

$(document).ready(function(){
    translateContent();
})