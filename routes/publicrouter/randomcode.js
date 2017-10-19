var express = require('express');
var randomCode = require('../../src/utils/svgCaptcha');
var router = express.Router();

router.get('/randomcode.html',function(req, res){
    var code = randomCode.getSvgCaptcha(false,20,2,80,20);
    if(code){
        // 保存到session,忽略大小写
        req.session.randomcode = code.text.toLowerCase();
        // 返回数据直接放入页面元素展示即可
        res.json({result:'success',msg:'',data:code.data});
    }else{
        res.json({result:'fail',msg:'randomCode Error'});
    }

});

module.exports = router;