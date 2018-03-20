var express = require('express');
var app = express();
var request = require("request");
//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});






app.get('/api/comic',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/comic/boutiqueListNew?device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&sexType=2&target=U17_3.0&time=1521163867&v=3320101&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/vip',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/vipList?device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&target=U17_3.0&time=1521164055&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/list',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/newSubscribeList?device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&target=U17_3.0&time=1521164147&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})


app.get('/api/rank',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/rank/list?device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&target=U17_3.0&time=1521164142&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/category',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/sort/mobileCateList?device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&target=U17_3.0&time=1521164167&v=2&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/todayhot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=4&argName=serial&argValue=1&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521164638&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})
app.get('/api/totalhot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=4&argName=serial&argValue=1&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone 5s&page=1&target=U17_3.0&time=1521164638&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/alittlehot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=4&argName=topic&argValue=7&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone 5s&page=1&target=U17_3.0&time=1521164733&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})
app.get('/api/alittletotalhot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=1&argName=topic&argValue=7&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521164750&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/onlyhot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=4&argName=topic&argValue=15&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521164931&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})
app.get('/api/onlytotalhot',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/commonComicList?argCon=1&argName=topic&argValue=15&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521164954&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})


app.get('/api/weekrank',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/index?argName=sort&argValue=7&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521447472&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/viprank',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/index?argName=topic&argValue=14&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone 5s&page=1&target=U17_3.0&time=1521165346&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/bestsalerank',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/index?argName=sort&argValue=26&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521165453&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})

app.get('/api/rankway',function(req,res){
    request('http://app.u17.com/v3/appV3_3/ios/phone/list/index?argName=sort&argValue=23&device_id=6E2E6665-D9AE-40DC-AC6E-A8797F74A8F5&model=iPhone%205s&page=1&target=U17_3.0&time=1521165564&version=3.3.3',function(error,response,body){
        // console.log(response);    
         res.send(JSON.parse(response.body));
    })
})


var server = app.listen(3000,function(){
    console.log("推荐数据:http://localhost:3000/api/comic");
    console.log("vip数据:http://localhost:3000/api/vip");
    console.log("订阅数据:http://localhost:3000/api/list");
    console.log("排行数据:http://localhost:3000/api/rank");
    console.log("分类数据:http://localhost:3000/api/category");
    console.log("完结今日最热:http://localhost:3000/api/todayhot");
    console.log("完结人气总榜:http://localhost:3000/api/totalhot");
    console.log("彩漫今日最热:http://localhost:3000/api/alittlehot");
    console.log("彩漫人气总榜:http://localhost:3000/api/alittletotalhot");
    console.log("独家今日最热:http://localhost:3000/api/onlyhot");
    console.log("独家总榜:http://localhost:3000/api/onlytotalhot");
    console.log("周榜:http://localhost:3000/api/weekrank");
    console.log("vip榜:http://localhost:3000/api/viprank");
    console.log("畅销榜:http://localhost:3000/api/bestsalerank");
    console.log("排行榜:http://localhost:3000/api/rankway");
})