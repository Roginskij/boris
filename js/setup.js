$(document).ready(function(){
    
/* SETUP */
    var setup = JSON.parse(window.localStorage.getItem('setup'));
    if(!setup){
        setup = {};
    }

/*LIST LANG AND CHANGE LANG */
$.get('http://h4l.paliy.lviv.ua/h4l/get_languages ', function(data){
    var li = $('.lang li');
    for(var i = 0; i < data.response.length; i++){
        $(li[i]).attr('lang', data.response[i])
    }
    $(li).click(function(e){
        e.preventDefault();
        var selectLang = $(this).attr('lang');
        setup.lang = selectLang;
    })
})
        
/* SAVE SETUP CHANGES */
$('.save_setup').click(function(){
    var domain = window.location.origin;
    window.localStorage.setItem('setup', JSON.stringify(setup))
    window.location.replace(domain + "/index.html")
})    
    
    
    
})