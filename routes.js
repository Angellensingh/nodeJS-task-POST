const express = require('express');
const Model = require('./model'); 
const router = express.Router();

router.post('/post', async (req, res) => {

    const data = new Model({
        name: req.body.name,
        email: req.body.email
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } 
    catch (error) {
        console.error('Error saving data:', error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
