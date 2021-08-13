const mysql = require('mysql2');
const fs = require("fs");
const connection = require("./connection");


const Query = {
    getAllUserDetails: async () => {
        
        let query = `SELECT id, name, bio, image_path FROM users`;
        // console.log(query);
        try{
            let data = await connection.promise().query(query);
            // console.log(data[0]);
            return data[0];
        }catch(err){
            console.log(err);
        } 
    },

    getUserDetails: async (_, {id}) => {
        let query = `SELECT id, name, bio, image_path FROM users WHERE id=${id}`;
        try{
            let data = await connection.promise().query(query);
            // console.log(data[0][0]);
            return data[0][0];
        }catch(err){
            console.log(err);
        }
    }
}

const Mutation = {
    addUser: async (root, {name,bio}) => {
        let query = `INSERT INTO users (name, bio) VALUES ("${name}", "${bio}")`;
        try{
            const success = await connection.promise().query(query)
            if (success) return "Success";
        }catch(err){
            console.log(err);
        }
    },
    
    uploadImage: async(root, {id, path}) => {
        // console.log(`"${path}`);
        // const file = fs.readFileSync(path);
        // const blob = Buffer.from(file).toString('binary');

        // console.log(blob);

        let query = `UPDATE trial SET picture=LOAD_FILE('${path}') WHERE id=${id}`;
        // let query = `UPDATE trial SET picture='${blob}' WHERE id=${id}`;
        try{
            const success = await connection.promise().query(query);
            if(success) return "image uploaded";
        }catch(err){
            console.log(err);
        }
    },

    uploadPath: async(_, {id, path}) => {
        let query = `UPDATE users SET image_path='${path}' WHERE id=${id}`;

        try{
            const success = await connection.promise().query(query);
            if(success) return "image path uploaded";
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = { Query, Mutation }; 