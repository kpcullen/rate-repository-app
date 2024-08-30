import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      user {
        id
        username
      }
      accessToken
      expiresAt
    }
  }
`
