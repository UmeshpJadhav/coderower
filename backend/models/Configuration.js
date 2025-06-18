const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    configId: {
        type: String,
        required: [true, 'Configuration ID is required'],
        unique: true,
        trim: true
    },
    data: {
        type: [[String]],
        required: [true, 'Configuration data is required']
    },
    remark: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Configuration', configurationSchema);