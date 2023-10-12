//  Immediately Invoked Function Expressions (IIFE)

(function  chai(){
    //named IIFE
    console.log("Db Connected")
})(); // (defination ) (execution)  iffe is used for the global scope ka pollution ke vajah se problem hota he , us global pollution ko hatane ke lie hm used krte he iffe

(
    (name)=>{
        console.log(`DB CONNECTED TWO ${name}`)
    }
)('pavan')

//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Logic Control ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


