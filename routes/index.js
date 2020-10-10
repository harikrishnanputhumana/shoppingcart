var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Iphone 11",
      category:"Mobile",
      discription:"this is a good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Samsung M21",
      category:"Mobile",
      discription:"this is a good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Oneplus 8",
      category:"Mobile",
      discription:"this is a good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Mi note 9",
      category:"Mobile",
      discription:"this is a good phone",
      image:"data:image/jpeg;base64,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"
    }
  ]
  res.render('index', { title: 'Express' });
});

module.exports = router;
