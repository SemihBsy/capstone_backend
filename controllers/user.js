import User from '../models/User.js';

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
       try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body, 
            },
            {
                new: true,
            }
        );
        res.status(200).json(updatedUser);
       } catch (err) {
        next(err);
       } 
    } else {
        return next(handleError(403, "You can only update your account"));
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
       try {
        await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json('User deleted successfully');
       } catch (err) {
        next(err);
       } 
    } else {
        return next(handleError(403, "You can only update your account"));
    }
};

