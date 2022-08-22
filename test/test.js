const {log} = require('utils-nxg-cg');
const {api,objectApiOpt,objectApiReq} = require('api-cg-lib');
const express = require('express');

const { request } = require('express');

const app = express();
app.use(express.json());

app.post('/', async(req, res)=>{
  let properties = {...objectApiReq};
  properties.method = req.body.method;
  properties.api = req.body.api;
  properties.auth = req.body.auth;
  properties.authType = req.body.authType;
  properties.addData = req.body.addData;
  
    try{
      const result = await api({data:properties},{});
      log.info("resultado", result);
      res.json(result);
    }
  
    catch(err){
      res.status(500).json(err);
    }
  })

  app.listen(3000, ()=>{
    console.log("Server ejecutandose en el puerto 3000");
  });