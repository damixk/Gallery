// Dependencies
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// Schema
let FileSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true},
    thumbnail_url: { type: String, required: true},
    show: { type: Boolean, default: false },
    content: String,
    tags: { type: String },
    published: { type: Date, default: Date.now }
    //approved_by author_id: { type: Schema.Types.ObjectId, ref: 'User' },

});

FileSchema.index({ tags: 'text' });

// Return model
module.exports = mongoose.model('File', FileSchema);
