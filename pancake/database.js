var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'go_pancake'
});

connection.connect();

var  sql = 'SELECT * FROM tokens limit 1';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});

connection.end();

//ali-mysql-client

// const DbClient = require('ali-mysql-client');

// const db = new DbClient({
// 	// host
// 	host: '127.0.0.1',
// 	// 端口号
// 	port: '3306',
// 	// 用户名
// 	user: 'root',
// 	// 密码
// 	password: 'root',
// 	// 数据库名
// 	database: 'go_pancake',
// });

// 查询单个值，比如下面例子返回的是数字51，满足条件的数据条数
// var result = db.select("count(1)")
// 	.from("tokens")
// 	.where("name", "TBCC", "like")
// 	.queryValue();

// console.log(result);


