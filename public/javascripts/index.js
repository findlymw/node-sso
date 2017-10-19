var index = {};
//加载图片验证码
index.loadRandomCode = function(){
    $.getJSON("/randomcode.html",function(json){
        var  randomCode = $('.randomcode');
        if(json && json.result === 'success' && json.data && randomCode){
            randomCode.html(json.data);
        }else{
            randomCode.html('<svg></svg>');
        }
    });
};
//为图片添加click时间进行验证码的重新加载
index.reloadRandomCode = function(){
    $('.randomcode').on('click',function(){
        index.loadRandomCode();
    });
}


$().ready(function(){
    index.loadRandomCode();
    index.reloadRandomCode();
});