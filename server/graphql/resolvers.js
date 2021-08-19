const mysql = require('mysql2');
const fs = require("fs");
const connection = require("./connection");


const Query = {
    getAllUserDetails: async () => {
        let QUERY = `
            SELECT id, name, bio, image_path 
            FROM users
        `
        // console.log(QUERY);
        try {
            let data = await connection.promise().query(QUERY);
            // console.log(data[0]);
            const results = [];

            for (let i=0; i<data.length; i++){
                results.push({
                    id: data[0][i].id,
                    name: data[0][i].name,
                    bio: data[0][i].bio,
                    imagePath: data[0][i].image_path
                })
            }
            return results;
        } catch (err) {
            console.log(err);
        }
    },

    getUserDetails: async (_, { id }) => {
        let QUERY = `
            SELECT id, name, bio, image_path 
            FROM users 
            WHERE id=${id}
        `
        try {
            let data = await connection.promise().query(QUERY);
            // console.log(data[0][0]);
            const obj = {
                id: data[0][0].id,
                name: data[0][0].name,
                bio: data[0][0].bio,
                imagePath: data[0][0].image_path
            }
            return obj;
        } catch (err) {
            console.log(err);
        }
    }
}


const Mutation = {
    addUser: async (_, { name, bio }) => {
        let QUERY = `
            INSERT INTO users (name, bio) 
            VALUES ("${name}", "${bio}")
        `

        try {
            const success = await connection.promise().query(QUERY);
            if (success) return "Success";
        } catch (err) {
            console.log(err);
        }
    },

    uploadImage: async (_, { id, path }) => {
        let QUERY = `
            UPDATE trial 
            SET picture=LOAD_FILE('${path}') 
            WHERE id=${id}
        `

        try {
            const success = await connection.promise().query(QUERY);
            if (success) return "image uploaded";
        } catch (err) {
            console.log(err);
        }
    },

    uploadPath: async (_, { id, path }) => {
        let QUERY = `
            UPDATE users 
            SET image_path='${path}' 
            WHERE id=${id}
        `

        try {
            const success = await connection.promise().query(QUERY);
            if (success) return "image path uploaded";
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { Query, Mutation }; 