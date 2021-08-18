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
            return data[0];
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
            return data[0][0];
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