import { gql } from '@apollo/client';

// Define the fragment using gql
const REPOSITORY_FIELDS = gql`  fragment RepositoryFields on Repository {
    id
    name
    ownerName
    description
    createdAt
    updatedAt
    stargazersCount
    forksCount
    language
    # Add any other fields of the Repository type
  }`;

// Define the main query using the fragment
const GET_REPOSITORIES = gql`  query GetRepositories(
    $after: String
    $first: Int
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      ownerName: $ownerName
    ) {
      edges {
        node {
          ...RepositoryFields  # Use the fragment here
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${REPOSITORY_FIELDS}  // Include the fragment in the query`;
