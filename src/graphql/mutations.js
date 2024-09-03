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

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`
