//리다이렉트 시키기
var express = require('express')
var http = require('http')


var app = express()

app.set('port', process.env.port || 3000)

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 함수가 실행됨')

    res.redirect('http://www.google.com')
})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹 서버를 실행함 : ' + app.get('port'))
})
