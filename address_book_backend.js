//使用express框架
var express = require("express");
var app = express();
//res.end( JSON.stringify(user));

//使用mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "wyrb45",
    database : "test"
});

//使用mongodb
var MongoClient = require("mongodb").MongoClient;
//数据库为runoob
var DB_CONN_STR = "mongodb://localhost:27017/test";

//创建一个帐号
app.get("/createAccount", function(req, res) {
    connection.connect();
    connection.query('insert into account VALUES(null,"' + req.query.username + '","' + req.query.password + '")', function(error, results, fields) {
        if (error) {
            return;
        }

        res.end("1");
    });
    connection.end();
});

//添加一个联系人
app.get("/addContact", function(req, res) {
    var insertData = function(db, callback) {
        var collection = db.collection("Contact");
        var data = [{
            "name" : req.query.name,
            "tel" : req.query.tel
        }];

        collection.insert(data, function(err, result) {
            if(err) {
                return;
            }

            callback(result);
        });
    };

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        insertData(db, function(result) {
            res.end("1");
            db.close();
        });
    });
});

//删除一个联系人
app.get("/removeContact", function (req, res) {
    var delData = function(db, callback) {
        var collection = db.collection("Contact");
        var whereStr = {"name" : req.query.name}

        collection.remove(whereStr, function(err, result) {
            if(err) {
                return;
            }

            callback(result);
        });
    };

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        delData(db, function(result) {
            res.end("1");
            db.close();
        });
    });
})

//列出所有联系人
app.get("/listContacts", function (req, res) {
    var selectData = function(db, callback) {
        var collection = db.collection("Contact");

        collection.find({}).toArray(function(err, result) {
            if(err) {
                return;
            }

            callback(result);
        });
    };

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        selectData(db, function(result) {
            res.end(JSON.stringify(result));
            db.close();
        });
    });
})

//监听
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("使用 http://%s:%s 访问", host, port);
});
