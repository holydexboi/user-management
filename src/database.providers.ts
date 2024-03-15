import { Sequelize, DataTypes } from "sequelize"; 

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 8889,
                username: 'root',
                password: 'root',
                database: 'usermanager',
            })

            sequelize.define('User', {
                name: { type: DataTypes.STRING},
                email: { type: DataTypes.STRING},
                phone: { type: DataTypes.BIGINT},
            })

            sequelize.define('Admin', {
                username: { type: DataTypes.STRING},
                password: {type: DataTypes.STRING}
            })

            
            
            sequelize.sync()

            return sequelize
        }
    }
]