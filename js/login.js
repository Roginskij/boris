var domain = 'http://h4l.paliy.lviv.ua';
//var domain = '';

$(document).ready(function () {
    $(document).keypress(function(e) {
    if(e.which == 13) {
    /* Authorization */
    $('#send_aut').click(function () {
        var password = $('#password').val();
        var login = $('#login').val();
        var data = {
            username: login,
            password: password
        }
        if (password && login) {
            $.post(domain + '/h4l/login', data, function (data) {
                if(data.state == 'ok'){
                    window.location.assign('/cameras.html')
                }
            })
        }
    })
    }
})