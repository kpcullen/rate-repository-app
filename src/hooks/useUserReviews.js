import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useUserReviews = () => {
  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: 'cache-and-network',
  })

  return {
    data: data?.me?.reviews?.edges || null,
    loading,
    error,
    userId: data?.me?.id,
    refetch,
  }
}

export default useUserReviews
