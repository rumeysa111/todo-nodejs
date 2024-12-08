const UserService = require('../services/user_service');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserService.checkUser(email);
        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error("Invalid Password");
        }

        let tokenData = { _id: user._id, email: user.email };
        const token = await UserService.generateToken(tokenData, "secretKey", '1h');
        res.status(200).json({ status: true, token: token });

    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
}