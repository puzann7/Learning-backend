// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try {
//          await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message,
//         })
//     }
// }
// the above is done by try catch and now lets by promises

const asyncHandler = (fn)=> (req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(err=>next(err))
}
// here promise.resolve makes sure that the fn function we're dealing with is async and return promise.

export {asyncHandler}

//higher order function: const asyncHandler = (fn)=> async()=>{}
