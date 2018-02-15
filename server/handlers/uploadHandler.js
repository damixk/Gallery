const mongoErrors = require('../handlers/mongoErrorHandler');
const multer  =   require('multer');



//Multer setup
let storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, 'profile_137x137-' + Date.now() + "." + file.mimetype.split("/")[1]);
  }
});

let limit =   { fileSize: 1000000 };
function filter (req, file, cb) {
    switch(file.mimetype) {
          case 'image/png':
            cb(null, true);
            break;
          case 'image/jpg':
            cb(null, true);
            break;
          case 'image/gif':
            cb(null, true);
            break;
          default:
            req.fileValidationError = 'goes wrong on the mimetype';
            cb(new Error('I don\'t have a clue!'));
            break;
    }
}

let upload = multer({ fileFilter : filter, storage: storage }).array('file',2); //limits: limit

upload.up = function(req, next){

    upload(req,function(err) {

        if(err) {

             return;
        }
        else{
            if(req.files){
                if(req.files.length > 0){

               }else{

               }
           }else{

               }
        }
    });

};

module.exports = upload;
