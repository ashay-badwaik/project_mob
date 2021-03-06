const { gql } = require('apollo-server');
const { Query, Mutation } = require('./resolvers');
const axios = require('axios');

test("getUserDetails", async () => {
  const response = await axios.post('http://localhost:4000/', {
    query: `
      query{
        getUserDetails (id:3){
          id
          name
          bio
        }
      }        
    `
  });

  const { data } = response;
  expect(data).toMatchObject({
    data: {
      getUserDetails: {
        id: "3",
        name: "ashay",
        bio: "hello"
      }
    }
  })
});

test("uploadImage", async () => {
  const response = await axios.post('http://localhost:4000/', {
    query: `
      mutation{
        uploadPath(
          id: 3
          path: "abd//asd/e"
        )
      }
    `
  })
  // random
  const { data } = response;
  expect(data).toMatchObject({
    data: {
      uploadPath: "image path uploaded"
    }
  })
})