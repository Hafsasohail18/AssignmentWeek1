const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req,res,next) => {
   res.end('will send all leaders to you');
})
.post((req,res,next) => {
    res.end('will add all leaders' + req.body.name + ' with details' +  req.body.description);
 })
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation is not suppported by /leaders ');
 })
.delete((req,res,next) => {
    res.end('deleting all the leaders!');
 });

 leaderRouter.route('/:leadersId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
})

.get((req,res,next) => {
    res.end('Will send details of the leaders: ' + req.params.leadersId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders '+ req.params.leadersId);
})

.put((req, res, next) => {
  res.write('Updating the leader: ' + req.params.leadersId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leadersId);
});

 module.exports = leaderRouter;