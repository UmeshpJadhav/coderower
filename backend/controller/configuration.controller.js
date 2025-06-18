const Configuration = require('../models/Configuration');

exports.getConfiguration = async (req, res) => {
    try {
        const config = await Configuration.findOne({ configId: req.params.id });
        
        if (!config) {
            return res.status(404).json({
                success: false,
                message: 'Configuration not found'
            });
        }
        res.status(200).json({
            success: true,
            data: config.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching configuration',
            error: error.message
        });
    }
};


exports.updateRemark = async (req, res) => {
    try {
        const { remark } = req.body;

        if (!remark) {
            return res.status(400).json({
                success: false,
                message: 'Remark is required'
            });
        }

        const config = await Configuration.findOneAndUpdate(
            { configId: req.params.id },
            { remark },
            { new: true, runValidators: true }
        );

        if (!config) {
            return res.status(404).json({
                success: false,
                message: 'Configuration not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Remark updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating remark',
            error: error.message
        });
    }
}; 