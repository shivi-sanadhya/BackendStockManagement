var item=require('../models/item_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next)
{
 item.addItem(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
});

router.put("/:id", function(req, res, next) {
    item.updateItem(req.params.id,req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

router.delete("/:id", function(req, res, next) {
    item.deleteItem(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

router.get('/:id?',function(req,res,next){
    if(req.params.id){
    item.getItemByid(req.params.id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    item.getAllItem(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
}
});
module.exports=router;