const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        console.log("------------------")
        const { username, password } = req.body;
        console.log("##########")
        const foundUser = await User.findOne({ where: { username: username,password:password } });
        if (foundUser) {
            res.status(200).json({ message: 'This user is in the database', userId: foundUser.id });
        } else {
            const newUser = await User.create({ username: username, password: password });
            res.status(200).json({ message: 'One record has been added', userId: newUser.id });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add the record into user' });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const foundUser = await User.findOne({ where: { username: username, password: password } });
        if (foundUser) {
            res.status(200).json({ message: 'This user is in the database', userId: foundUser.id });
        } else {
            res.status(200).json({ message: 'No record found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred during login' });
    }
};
