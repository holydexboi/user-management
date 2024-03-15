import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('usermanager', 'root', 'root', {dialect: 'mysql', port: 8889})
class Admin extends Model {
    [x: string]: any;
}

Admin.init({
    username: { type: DataTypes.STRING},
                password: { type: DataTypes.STRING},

}, {sequelize, modelName: 'Admin'})





export {Admin}

