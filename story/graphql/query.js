import { gql } from '@apollo/client';

export const USER_DETAILS = gql`
  query getUserDetails($id: ID!){
    getUserDetails(id:$id){
      name
      bio
      imagePath
    }
  }
`