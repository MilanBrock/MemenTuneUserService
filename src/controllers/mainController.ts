// src/controllers/userController.ts
import { Request, Response } from 'express';
import { updateUserDescription } from '../utils/databaseCRUD';


export const UserDescriptionUpdate = async (req: Request, res: Response) => {
    const { userId, descriptionUpdate } = req.body;
    try {
        const succes = await updateUserDescription(userId, descriptionUpdate);
        if (succes) {
            res.status(201).json({"message": "Song submission successful"});

        } else {
            res.status(500).json({"message": "Unable to update user description"});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}











