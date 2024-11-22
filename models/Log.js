const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now },
    sourceAppId: { type: String, required: true },
    dataPayload: { type: Object, required: true },
    hash: { type: String, required: true },
    prevHash: { type: String, required: true }
});

// Add indexes for performance
LogSchema.index({ timestamp: 1 });
LogSchema.index({ eventType: 1 });
LogSchema.index({ sourceAppId: 1 });

module.exports = mongoose.model('Log', LogSchema);
