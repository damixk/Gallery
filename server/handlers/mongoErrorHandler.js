module.exports = function(err, callback){

    const ValidationErrors = {
        REQUIRED: 'required',
        NOTVALID: 'notvalid',
        OBJECTID: 'ObjectId'
        /* ... */
    };
    let errMessage = "";
    let status = 500;

    for (let errName in err.errors) {

        switch(err.errors[errName].kind) {
          case ValidationErrors.REQUIRED:
            errMessage = ('Field is required');
            status = 400;
            break;
          case ValidationErrors.NOTVALID:
            errMessage = ('Field is not valid');
            status = 400;
            break;
          case ValidationErrors.OBJECTID:
            errMessage = ('Wrong Object'); // Solve not found
            status = 404;
            break;
          default:
            errMessage = ('Unexpected error!');
            status = 400;
        }
    }
      return callback({ stat: status, message: errMessage});
}
