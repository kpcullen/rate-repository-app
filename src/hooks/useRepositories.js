import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    nextFetchPolicy: 'cache-and-network',
  })

  return { repositories: data?.repositories || { edges: [] }, loading, error }
}

export default useRepositories
