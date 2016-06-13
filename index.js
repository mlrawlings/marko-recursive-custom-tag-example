require('marko/node-require').install()

var http = require('http')
var template = require('./template.marko')

http.createServer((req, res) => {
    template.render({
        items: [{
            name:'vehicles',
            subitems:[{
                name:'cars',
                subitems:[{
                    name:'elantra'
                }]
            },{
                name:'trucks',
                subitems:[{
                    name:'f150',
                }, {
                    name:'tacoma'
                }]
            }]
        }, {
            name:'foods',
            subitems:[{
                name:'pizza'
            },{
                name:'wings'
            }]
        }]
    }, res)
}).listen(8080)

console.log('Visit http://localhost:8080 in your browser')