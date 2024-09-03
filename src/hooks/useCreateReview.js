import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

const useCreateReview = () => {
  const navigate = useNavigate()
  const [mutate] = useMutation(CREATE_REVIEW, {
    onCompleted: (data) => {
      navigate(`/${data.createReview.repositoryId}`)
    },
  })

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const review = { ownerName, repositoryName, rating: +rating, text }

    try {
      await mutate({ variables: { review } })
    } catch (e) {
      console.log(e)
    }
  }
  return createReview
}

export default useCreateReview
