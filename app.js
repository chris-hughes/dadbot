// require modules

var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");

// define requestHandlers

var handle = {};
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle["/user"] = requestHandlers.user;
handle["/subreddit"] = requestHandlers.subreddit;
handle["/query"] = requestHandlers.query;

// start server

server.startServer(router.route,handle);