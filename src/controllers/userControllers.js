import { createUser, getAll, updateUser, deleteUser } from "../repositorys/userRepository.js"; 
import bcrypt from "bcrypt";
import { userValidation } from "../validations/userValidation.js";

export const create = async (req, res) => {
    try {
        await userValidation.validate(req.body);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const get = async (req, res) => {
    try{
        const users = await getAll();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e)
    }
}

export const update = async (req, res) => {
    try{
        const user = await updateUser(Number(req.params.id),req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req, res) => {
    try{
        await deleteUser(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};