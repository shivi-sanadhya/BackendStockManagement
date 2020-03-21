var db=require('../dbconnec'); //reference of dbconnection.js
 
var stock={
 
    
GetAllStock:function(callback){
 
return db.query("Select * from Stock",callback);
} ,

GetAllStockById:function(fk_itemId,fk_branchId,callback){
 
        return db.query("Select * from Stock where fkItemId=? and fkBranchId=? ",[fk_itemId,fk_branchId],callback);
},
addStock:function(item,callback){
    return db.query("insert into Stock(fkItemId,fkBranchId,stockQuantity) values(?,?,?)",[item.fkItemId,item.fkBranchId,item.stockQuantity],callback);
},

updateStock:function(fk_itemId,fk_branchId,item,callback){
    return db.query("update Stock set stockQuantity=? where fkItemId=? and fkBranchId=? ",[item.stockQuantity,fk_itemId,fk_branchId] ,callback)
},

deleteStock:function(fk_itemId,fk_branchId,callback){

    return db.query("delete from Stock where fkItemId=? and fkBranchId=? ",[fk_itemId,fk_branchId],callback);
} 

    
    
  
}
 module.exports=stock;
