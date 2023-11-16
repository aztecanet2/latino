import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Listings = db.define('shootings',{
    id:{
        type: DataTypes.DOUBLE,
        primaryKey: true
    },
    name_of_person:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Listings;