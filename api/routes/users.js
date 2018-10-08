const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /users'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Handling POST request to /users'
    })
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if (id == 'user1'){
        res.status(200).json({
            message: 'You discovered user 1',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an Id'
        })
    }
});

router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated User Information!'
    });
});

module.exports = router;