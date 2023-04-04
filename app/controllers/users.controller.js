var usersModel = require("../models/users.models");

const createUser = async (user, res) => { 

    await usersModel.createUser(user)
    .then((result) => {
        console.log(result);
        res.json({ msg: "usuario salvo" }).status(200)
    })
    .catch((err) => {
        console.log(err);
        res.json({ msg: "erro ao salvar recurso" }).status(500);
    });

}

const getAllUsers = async (user, res) => {
        await usersModel.getAllUsers()
            .then((users) =>
                res.json(JSON.parse(JSON.stringify(users))).status(200)
            )
            .catch((err) => {
                console.log(err);
                res.json({ msg: "erro ao buscar os recursos" }).status(500)
            });
}

module.exports = {
    createUser,
    getAllUsers
};