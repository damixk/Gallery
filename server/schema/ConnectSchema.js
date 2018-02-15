// Dependencies
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// Schema
const ConnectSchema = new Schema({
    ip: { type: String, required: true },
    connected: { type: Date, default: Date.now }

});


// Return model
module.exports = mongoose.model('Connect', ConnectSchema);
