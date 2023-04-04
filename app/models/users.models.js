const dbConnect = require ("../db_connection");

const createUser = async (user) => {
    const dbConnection = await dbConnect.connect();
    const sql = 'INSERT INTO users(name,age) VALUES (?,?);';
    const values = [user.name, user.age];
    await createTableIfNotExists();
    return await dbConnection.query(sql, values);
};

const getAllUsers = async () => {
    const dbConnection = await dbConnect.connect();
    await createTableIfNotExists();

    const allUsers = JSON.parse(JSON.stringify(await dbConnection.query('SELECT * FROM users;')))[0];

    return allUsers;
};

const createTableIfNotExists = async () => {
    const dbConnection = await dbConnect.connect();

    const usersTableSQL = `create table if not exists users(
        id int primary key auto_increment,
        name varchar(255)not null,
        age int(3) not null
    )`;

    await dbConnection.query(usersTableSQL);
};

module.exports = {
    createUser,
    getAllUsers
};