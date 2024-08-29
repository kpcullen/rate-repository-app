import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const {
    data: { repositories },
    loading,
    error,
  } = useQuery(GET_REPOSITORIES, {
    nextFetchPolicy: 'cache-and-network',
  })

  return { repositories, loading, error }
}

export default useRepositories
