const Thumbnail = require('../schema/FileSchema');
const mongoErrors = require('../handlers/mongoErrorHandler');
let review = {};

review.another = function(req, res){
    Thumbnail.findOne({'pending': true , 'reviewed': false})
    .sort({'published': 1})
    .exec( function(err, pending) {
            if (err){
                    res.send(err);
            }else{
                if(pending){
                res.status(200).json({name:pending.title, url:pending.url, tags:pending.tags,
                                            thumbnail:pending.thumbnail_url, author:pending.author});
                }
            }
    });
};

review.approve = function(req, res){
      Thumbnail.findOne({ url: req.body.url }, function (err, doc){
        if(doc){
            if(req.body.tags){
                doc.tags = req.body.tags;
            }
            if(req.body.type == 1){ //Allow
                doc.pending = false;
                doc.show = true;
                doc.reviewed = true;
            }
            if(req.body.type == 0){ //Decline
                doc.pending = false;
                doc.reviewed = true;
                doc.show = false;
            }
            doc.save();
          }
          res.status(200).json({ "message" : "Done"});
        });
};


module.exports = review;
