var m = require('mithril')
var User = require('../models/User')

module.exports = {
    oninit: User.loadList,
    view:()=>{
        return m('.user-list',User.list.map((user)=>{
            return m('.user-list-item', `${user.firstName} ${user.lastName}`)
        }))
    }
}
