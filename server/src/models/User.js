// 2/ this User model is a function that takes sequelize and datatypes and return the user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
    })
    return User
}