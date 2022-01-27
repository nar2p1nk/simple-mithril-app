

var UserList = require('./views/UserList')
var UserForm = require('./views/UserForm')

var m = require('mithril')

var root = document.body

document.addEventListener("DOMContentLoaded", function(event) { 
m.route(root, '/list',{
    '/list': UserList,
    '/edit/:id':UserForm
})})
