function setup(app, handler) {
    app.post('/api/thumbnail/add', handler.thumbnail.add);
    app.get('/api/thumbnail/newest/:offset?', handler.thumbnail.newest);
    app.get('/api/thumbnail/search/:query/:offset?', handler.thumbnail.search);
    //app.get('/api/thumbnail/profile/:id',  handler.user.profile);

    app.post('/api/rev/another', handler.auth.islogged, handler.review.another);
    app.post('/api/rev/approve', handler.auth.islogged, handler.review.approve);

}

exports.setup = setup;
 