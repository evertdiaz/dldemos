var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


 var requestify = require('requestify');
router.get('/', function(req, res) {
	requestify.request('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
    method: 'POST',
    body: { 
    	"url": "https://scontent.flim5-2.fna.fbcdn.net/v/t34.0-12/16343872_1363168407075248_1166754491_n.jpg?oh=3cc2600aac6fb953f273a19bdb3348fe&oe=588F74C1" 
	},
    headers: {
    	'Content-Type': 'application/json',
    	'Ocp-Apim-Subscription-Key': 'TU_API_KEY'
    }
    })
    .then(function(response) {
        // get the response body
        res.send(response.getBody());

        // // get the response headers
        // response.getHeaders();

        // // get specific response header
        // response.getHeader('Accept');

        // // get the code
        // response.getCode();

        // // get the raw response body
        // response.body;
    })
})
router.get('/grupal', function(req, res) {
    requestify.request('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
    method: 'POST',
    body: { 
        "url": "https://scontent.flim5-2.fna.fbcdn.net/v/t35.0-12/16357217_1352100498194166_686040146_o.jpg?oh=daafb8fb030b05409742cb55acd32d36&oe=588F9648" 
    },
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'd74ce4b338104f57a05681476eeec23d'
    }
    })
    .then(function(response) {
        // get the response body
        res.render('grupal', { rec: response.getBody(), imagen: "https://scontent.flim5-2.fna.fbcdn.net/v/t35.0-12/16357217_1352100498194166_686040146_o.jpg?oh=daafb8fb030b05409742cb55acd32d36&oe=588F9648"})
        console.log(response.getBody()[0].scores)
        // res.send(response.getBody());

        // // get the response headers
        // response.getHeaders();

        // // get specific response header
        // response.getHeader('Accept');

        // // get the code
        // response.getCode();

        // // get the raw response body
        // response.body;
    })
})
    

module.exports = router;
