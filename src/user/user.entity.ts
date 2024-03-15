import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('usermanager', 'root', 'root', {dialect: 'mysql', port: 8889})
class User extends Model {}

User.init({
    name: { type: DataTypes.STRING},
                email: { type: DataTypes.STRING},
                phone: { type: DataTypes.BIGINT},

}, {sequelize, modelName: 'USER'})

export {User}

