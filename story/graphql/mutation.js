import { gql } from "@apollo/client";


export const UPLOAD_IMAGE_PATH = gql`
    mutation uploadPath($id: ID!, $path: String!) {
        uploadPath(
            id: $id 
            path: $path
        )
    }
`