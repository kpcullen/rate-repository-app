import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`
