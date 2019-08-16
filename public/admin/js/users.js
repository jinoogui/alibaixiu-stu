$.ajax({
        url: '/users',
        type: 'get',
        success: function(response) {
            var html = template('userTpl', { data: response });
            $('#tbodyTpl').html(html);
        }
    })
    //添加用户功能 已完成 8.15 
$('#addusers').on('submit', function() {
    var fromdate = $(this).serialize();
    console.log(fromdate);

    $.ajax({
        url: '/users',
        type: 'post',
        data: fromdate,
        success: function() {
            location.reload();
            // alert('xx')
        },
        error: function(err) {
            console.log(err);
            alert('添加用户失败 请联系管理员')

        }
    })
    return false;
})
$('#addusers').on('change', '#avatar', function() {
    var fromdata = new FormData();
    fromdata.append('avatar', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: fromdata,
        contentType: false,
        processData: false,
        success: function(result) {
            $('#avatarvalue').val(result[0].avatar);
            $('#headimg').attr('src', result[0].avatar)
        }
    })
});