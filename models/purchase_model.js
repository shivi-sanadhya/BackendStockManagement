var db=require('../dbconnec');
var purchase={
    getAllPurchase:function(callback){
        return db.query('select * from purchase',callback);
    },
    addPurchase:function(item,callback){
        return db.query("insert into purchase(purchaseId,purchaseDate,fkSupplierEmailId,fkBranchId) values(?,?,?,?)",[item.purchaseId,item.purchaseDate,item.fkSupplierEmailId,item.fkBranchId],callback);
    },
    deletePurchase:function(id,callback){
        return db.query("delete from purchase where purchaseId=?",[id],callback);
    },
   
    getPurchasebyid:function(id,callback){
        return db.query("select * from purchase where purchaseId=?",[id],callback);
    },
    updatePurchase:function(id,item,callback){

        return db.query("update purchase set purchaseDate=?,fkSupplierEmailId=?,fkBranchId=? where purchaseId=?",[item.purchaseDate,item.fkSupplierEmailId,item.fkBranchId,id],callback);
    },
    // getPurchaseId:function(item,callback)
    // {
    //     return db.query("select purchaseId from purchase where purchaseDate=? and fkSupplierEmailId=? and fkBranchId=?",[item.purchaseDate,item.fkSupplierEmailId,item.fkBranchId],callback);
    // }
    getBranchAndsupplierName:function(callback)
   {
  
  return db.query("select * from purchase join branch on (purchase.fkBranchId=branch.branchId) join supplier on(purchase.fkSupplierEmailId=supplier.supplierEmailId)",callback);    
   },
   getBranchAndsupplierNameById:function(id,callback)
   {
  
  return db.query("select * from purchase join branch on (purchase.fkBranchId=branch.branchId) join supplier on(purchase.fkSupplierEmailId=supplier.supplierEmailId) where purchaseId=?",[id],callback);    
   },

};
module.exports=purchase;