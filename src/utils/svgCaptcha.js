'use strict';
var svgCaptcha = require("svg-captcha");
/**
 * get captcha based on svg
 * @param _inverse 是否翻转颜色，默认为false
 * @param _fontSize 字体大小,默认为18
 * @param _noiseNum 噪声线条数，默认为0
 * @param _width 宽度，默认为80
 * @param _height 高度，默认为30
 */
exports.getSvgCaptcha = function(boolInverse,intFontSize,intNoiseNum,intWidth,intHeight){
    // 验证码，有两个属性，text是字符，data是svg代码
    var code = null
    try{
        code =  svgCaptcha.create({
            // 翻转颜色
            inverse: boolInverse === true?true : false,
            // 字体大小
            fontSize: intFontSize < 18?18:intFontSize,
            // 噪声线条数
            noise: intNoiseNum < 0? 0 : intNoiseNum,
            // 宽度
            width: intWidth < 80 ? 80 : intWidth,
            // 高度
            height: intHeight < 20 ? 30 : intHeight
        });
    }catch(e){
        code = null;
    }finally {
        return code;
    }
};

