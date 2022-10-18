var DB = require('./dboperations');
var Customer = require('./customer');
const dboperations = require('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })
 
 router.route('/customers').get((request,response)=>{
 
     dboperations.getCustomers().then(result => {
        response.json(result);
     })
 
 })

 router.route('/customers/:id').get((request,response)=>{

    dboperations.getcustomer(request.params.id).then(result => {
       response.json(result);
    })

})


 var port = process.env.PORT || 3000;
 app.listen(port);
 console.log('Customers API is runnning at ' + port);
 