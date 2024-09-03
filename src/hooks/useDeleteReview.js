import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { GET_REVIEWS } from '../graphql/queries'

const useDeleteReview = (userId) => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_REVIEWS, variables: { id: userId } }],
    fetchPolicy: 'network-only',
    awaitRefetchQueries: true,
  })
  const deleteReview = async (id) => {
    console.log(id)
    await mutate({ variables: { id } })
  }
  return deleteReview
}

export default useDeleteReview
