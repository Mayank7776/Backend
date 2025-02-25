// Best practice, Promises
const asyncHandler = (requestHandler) => {
   (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next)
    .reject((err) => next(err))
    )
   }
} 


// bad practice
// Try Catch
// const asyncHnadler = (func) => async (req, res, next) => {
//    try{
//      await func(req, res, next)
     
//    } catch(error){
//     res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//     })
//    }

// }


export {asyncHandler}


