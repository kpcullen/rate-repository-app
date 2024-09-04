import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            text
            rating
            repository {
              fullName
              url
            }
          }
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
      ...RepositoryFields
    }
  }
  ${REPOSITORY_FIELDS}
`

export const GET_REVIEWS = gql`
  query getReviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
    }
  }
`
