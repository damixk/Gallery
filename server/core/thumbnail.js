const File = require('../schema/FileSchema');
const mongoErrors = require('../handlers/mongoErrorHandler');
const uploadHandler = require('../handlers/uploadHandler');
let thumbnail = {};

thumbnail.add = function(req, res){
    var model = new File();

    if (req.body.token == config.apiToken){

        uploadHandler.up(req);
        model.title = req.body.title;
        model.tags = req.body.tags || "";
        model.thumbnail_url;

        //Store in mongo
        model.save(function(err) {
                if (err){
                    mongoErrors(err, function(response){
                        res.status(response.stat).json({ message: response.error});
                    });
                }
                else{
                    res.status(200).json({ message: 'New thumbnail created!' });
                }
        });
    }else{
        res.status(401).json({ message: 'Wrong token.' });
    }
};

thumbnail.newest = function(req, res){
    const offset = req.params.offset || 0;
    File.find({'show': true})
    .skip(parseInt(offset))
    .limit(parseInt(10))
    .sort({'published': -1})
    .exec( function(err, thumbnails) {
        File.count({'show': true}, function(err, c){
            if (err){
                    res.send(err);
            }else{

                let fileMap = [];
                for (let k in thumbnails){
                    fileMap.push({id: offset + k , count: c, name:thumbnails[k].title, url:thumbnails[k].url,
                        thumbnail:thumbnails[k].thumbnail_url});
                }
                res.status(200).json(fileMap);
            }
        });
    });
};

thumbnail.search = function(req, res){
    const offset = req.params.offset || 0;
     File.find({ $text : { $search : req.params.query } , 'show': true }, { score: { $meta: "textScore" } })
     .limit(parseInt(10))
     .skip(parseInt(offset))
     .sort({ score: { $meta: "textScore" } } )
     .exec( function(err, thumbnails) {
         if (err){console.log(err)}
        File.count({ $text : { $search : req.params.query } ,  'show': true })
        .skip(parseInt(offset))
        .exec(function(err, c){
            if (err){
                    res.send(err);
            }else{

                let fileMap = [];
                for (let k in thumbnails){
                    fileMap.push({id: offset + k , count: c, name:thumbnails[k].title, url:thumbnails[k].url,
                        thumbnail:thumbnails[k].thumbnail_url});
                }
                res.status(200).json(fileMap);
            }
        });
    });
};

module.exports = thumbnail;
