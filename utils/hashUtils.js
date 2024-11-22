const crypto = require('crypto');

// Generate a cryptographic hash for a log
const generateHash = (log) => {
    return crypto.createHash('sha256')
        .update(JSON.stringify(log))
        .digest('hex');
};

// Validate hash integrity
const isValidHashChain = (log, prevLog) => {
    return log.prevHash === generateHash(prevLog);
};

module.exports = { generateHash, isValidHashChain };
