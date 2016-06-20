/**
 * Created by Dell on 2016/6/17.
 */
var connect = require('connect');
connect.createServer(
    connect.static("../angularjs")
).listen(5000);