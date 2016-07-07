$(document).ready(function(){
    
    /* SETUP */
        var setup = JSON.parse(window.localStorage.getItem('setup'));
        if(!setup){
            setup = {};
        }

    /*LIST LANG AND CHANGE LANG */
    $.get(domain + '/h4l/get_languages ', function(data){
        var img = $('.lang li img')
        var li = $('.lang li');
        for(var i = 0; i < data.response.length; i++){
            $(li[i]).attr('lang', data.response[i])
        }
        $(li).click(function(e){
            e.preventDefault();
            $(img).removeClass('active_tub_lang');
            $(this).children().children().addClass('active_tub_lang');
            var selectLang = $(this).attr('lang');
            setup.lang = selectLang;
        })
    })

    /* SAVE SETUP CHANGES */
    $('.save_setup').click(function(){
        var domain = window.location.origin;
        window.localStorage.setItem('setup', JSON.stringify(setup));
        window.location.replace(domain + "/cameras.html");
    })  
    
    /* active tab setup page */
    
    $('.tabs').click(function(){
        $('.tabs').removeClass('active_tab');
        $(this).addClass('active_tab');
    })
    
})