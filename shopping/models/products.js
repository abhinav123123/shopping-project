// // const productss=[];
// const fs=require('fs');
// const path=require('path');
// const rootpath=require('../util/path');
// module.exports=class product{
//     constructor(titles){
//         this.title=titles;
//     }

//     save(){
//         const p=path.join(rootpath,'data','product.json');
//         fs.readFile(p,(error,fileContent)=>{
//             let products=[];
//             if(!error){
//                 products=JSON.parse(fileContent);
//             }
//             products.push(this);
//             // console.log(error);
//             fs.writeFile(p,JSON.stringify(products),(err)=>{
//                 // console.log(err);
//             });
//         })
//     }

//    static fetchAll(callback){
//     const p=path.join(rootpath,'data','product.json');
//        fs.readFile(p,(error,fileContent)=>{
//         if(error){
//             callback([]);
//         }
//         callback(JSON.parse(fileContent));
//        })
//     }
// }



// const productss=[];
const fs=require('fs');
const path=require('path');
const rootpath=require('../util/path');

const p=path.join(rootpath,'data','product.json');

const getproductsfromFile=(callback)=>{
       fs.readFile(p,(error,fileContent)=>{
        if(error){
            callback([]);
        }
        callback(JSON.parse(fileContent));
       })
}
module.exports=class product{
    constructor(titles){
        this.title=titles;
    }

    save(){
        const p=path.join(rootpath,'data','product.json');
       getproductsfromFile(products=>{
        products.push(this);
            // console.log(error);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                // console.log(err);
            });
       })
    }

   static fetchAll(callback){
     getproductsfromFile(callback);
    }
}