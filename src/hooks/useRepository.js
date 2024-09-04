import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data, loading, fetchMore, error } = useQuery(
    GET_REPOSITORY,
    {
      variables: { id },
    },
    {
      nextFetchPolicy: 'cache-and-network',
    }
  )

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
      },
    })
  }

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
    error,
  }
}

export default useRepository
