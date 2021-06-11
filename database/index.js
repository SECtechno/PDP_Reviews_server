var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'password',
  database : 'reviews_ts'
});

connection.connect();


module.exports = connection;

// Connect to the database
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();


// ##1. DOWNLOAD THE MYSQL SERVER IN UBUNTU
    // in ubantu home
    // sudo apt update
    // sudo apt install mysql-server
    // sudo systemctl status mysql
    // sudo mysql_secure_installation
    // sudo mysql
    // change root user password type
    // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';

// ##2. CREATE REMOTE USER IN MYSQL SERVER & GRANT ACCESS TO SERVER
    // in mysql server
    //CREATE USER 'server'@'server_IP' IDENTIFIED BY 'new-password';
    //grant all privileges on *.* to 'server'@'server_IP';
    //FLUSH PRIVILEGES;

// ##3. CHANGE THE CONFIGURE FILE
    // in ubantu home
    // cd /etc/mysql/mysql.conf.d
    // sudo vim mysqld.cnf
    // change bind-address = 0.0.0.0

// ##4. CHANGE THE PASSWORD TYPE
    // in mysql server
    // ALTER USER 'server'@'server_IP' IDENTIFIED WITH mysql_native_password BY 'new-password'

    //CREATE USER 'server2'@'54.219.119.13' IDENTIFIED BY '123@Password';
    //grant all privileges on *.* to 'server2'@'54.219.119.13';
    //FLUSH PRIVILEGES;
    // ALTER USER 'server2'@'54.219.119.13' IDENTIFIED WITH mysql_native_password BY '123@Password'

// ##1. DOWNLOAD THE MYSQL SERVER IN UBUNTU
    // in ubantu home
    // sudo apt update
    // sudo apt install mysql-server
    // sudo systemctl status mysql
    // sudo mysql_secure_installation
    // sudo mysql
    // change root user password type
    // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';

// ##2. CREATE REMOTE USER IN MYSQL SERVER & GRANT ACCESS
    // in mysql server
    //CREATE USER 'server'@'13.57.228.201' IDENTIFIED BY '123@Password';
    //grant all privileges on *.* to 'server'@'13.57.228.201';
    //FLUSH PRIVILEGES;

// ##3. CHANGE THE CONFIGURE FILE
    // in ubantu home
    // cd /etc/mysql/mysql.conf.d
    // sudo vim mysqld.cnf
    // change bind-address = 0.0.0.0

// ##4. CHANGE THE PASSWORD TYPE
    // in mysql server
    // ALTER USER 'server'@'13.57.228.201' IDENTIFIED WITH mysql_native_password BY '123@Password'


// SELECT user, authentication_string, plugin, host FROM mysql.user;



//CREATE USER 'root' @'%' IDENTIFIED BY '123@Password';
//grant all privileges on *.* to 'root'@'%';
//FLUSH PRIVILEGES;


/*
rds

hrsf1342021
*/
