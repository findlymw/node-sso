'use strict';
const redisConfig = {
    redisIP : '127.0.0.1',
    redisPort : '6379',
    redisExpTime : 7200,//Redis session TTL过期时间，单位秒
    redisDB : 0,
    redisPrefix : 'nsso:', //redis前缀，默认为sess:，这里配置nsso=node-sso
    redisPass : '123456',

    //redis connection pool config
    redisMaxConnection : 300, //max connection num , default 30
    redisPerformChecks : false, //checks for needed push/pop functionality
    redisConfigDBNu : 2, //used num 2 of redis db
};

exports.cookie = {
        path :'/',
        maxAge : 1800000,
        secure : false, //https config true,http config false
        httpOnly : true
}
exports.sessionStore = {
    'host' : redisConfig.redisIP,
    'port' : redisConfig.redisPort,
    'pass' : redisConfig.redisPass,
    'prefix' : redisConfig.redisPrefix,
    'db' : redisConfig.redisDB,
    'ttl' : redisConfig.redisExpTime,//Redis session TTL过期时间，单位秒
    'logErrors' : true
}

exports.config = {
    sessionKey : 'nsso.session',
    sessionSecret : 'Asecret-node-sso-secret-XOSODF9sdf7D9sd9fu-dev',
    cookieName : 'nodesso',
    proxyConfig : 1,//proxy config
    sessionStoreType : 1, //1:内存 2:redis
    favicon : false,//是否防止favicon，默认为false
    morganLevel : 'dev',//log 级别


};