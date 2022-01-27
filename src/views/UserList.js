var m = require('mithril')
var User = require('../models/User')

module.exports = {
    oninit: User.loadList,
    view:()=>{
        return(
            m('.app',[
                m('h1',{class:'head1'},'welcome to a basic mithril app'),
                m('h2',{class:'head2'},
                    'this is a basic app made with mithril js'),
                m('h3',{class:'head3'},'tutorial at: ',[
                    m('a',
                        {class:'mithril',href:
                        'https://mithril.js.org/simple-application.html'},
                    'mithril.js.org'),
                ]),
                m('.user-list',User.list.map((user)=>{
                    return m('.user-list-item',[
                        m('p',
                            [m('a',{class:'a1',href:`#!/edit/${user.id}`},
                                `${user.firstName} ${user.lastName}`)]
                        )
                    ])
                }))])
            )}
        }
        
