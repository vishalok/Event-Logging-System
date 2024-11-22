const Log = require('../models/Log');
const { generateHash } = require('../utils/hashUtils');

// Create a new event log
const createLog = async (req, res, next) => {
    try {
        const { eventType, sourceAppId, dataPayload, prevHash } = req.body;

        // Validate input data
        if (!eventType || !sourceAppId || !dataPayload || !prevHash) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Generate a hash for the new log
        const hash = generateHash({ eventType, sourceAppId, dataPayload, prevHash });

        // Save the log
        const log = new Log({ eventType, sourceAppId, dataPayload, prevHash, hash });
        const savedLog = await log.save();

        res.status(201).json(savedLog);
    } catch (error) {
        next(error);
    }
};

// get logs with filters and pagination
const getLogs = async (req, res, next) => {
    try {
        const { eventType, sourceAppId, startTime, endTime, page = 1, limit = 10 } = req.query;
        const filters = {};

        if (eventType) filters.eventType = eventType;
        if (sourceAppId) filters.sourceAppId = sourceAppId;
        if (startTime || endTime) {
            filters.timestamp = {};
            if (startTime) filters.timestamp.$gte = new Date(startTime);
            if (endTime) filters.timestamp.$lte = new Date(endTime);
        }

        const logs = await Log.find(filters)
            .sort({ timestamp: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json(logs);
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    createLog,
    getLogs
 };
