import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({
  orderBy = 'CREATED_AT',
  orderDirection = 'ASC',
  searchKeyword = '',
}) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
    fetchPolicy: 'cache-and-network',
  })

  return { repositories: data?.repositories || { edges: [] }, loading }
}

export default useRepositories
