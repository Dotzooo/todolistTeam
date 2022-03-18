const http = require('http');
const { v4: uuidv4 } = require('uuid');
const errHandle = require('./errorHandle');
const libs = require('./libs');
const { successHandler, errorHandler } = require('./responseHandler');
const postTodo = require('./postTodo');

const todos = []; // 代辦清單

const requestListener = (req, res)=>{

    if(req.url=="/todos" && req.method == "GET"){
        // getTodo.js
    }else if(req.url=="/todos" && req.method == "POST"){
        // postTodo.js
        postTodo(req, res, todos);
    }else if(req.url=="/todos" && req.method == "DELETE"){
        // deleteTodo.js
    }else if(req.url.startsWith("/todos/") && req.method=="DELETE"){
        // deleteTodo.js
    }else if(req.url.startsWith("/todos/") && req.method=="PATCH"){
        // patchTodo.js
    }else if(req.method == "OPTIONS"){
        res.writeHead(200, libs.headers);
        res.end();
    }else{
        errorHandler(res, 404, '無此網站路由');
    }
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005);